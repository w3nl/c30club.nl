import { readFile, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const htmlPath = path.join(repoRoot, 'docs', 'index.html')
const html = await readFile(htmlPath, 'utf8')

const errors = []

const idMatches = [...html.matchAll(/\sid\s*=\s*"([^"]+)"/g)]
const ids = new Set(idMatches.map((match) => match[1]))

const anchorMatches = [...html.matchAll(/\shref\s*=\s*"#([^"]+)"/g)]
for (const match of anchorMatches) {
  const anchor = match[1]
  if (!ids.has(anchor)) {
    errors.push(`Missing target id for anchor #${anchor}`)
  }
}

const attrRegex = /\s(?:src|href)\s*=\s*"([^"]+)"/g
const localRefs = [...html.matchAll(attrRegex)]
  .map((match) => match[1])
  .filter((value) => {
    if (value.startsWith('#')) {
      return false
    }

    if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('mailto:') || value.startsWith('tel:')) {
      return false
    }

    return true
  })

for (const ref of localRefs) {
  if (!ref.startsWith('./')) {
    errors.push(`Local reference must start with ./ : ${ref}`)
  }

  const relative = ref.startsWith('./') ? ref.slice(2) : ref
  const resolved = path.join(path.dirname(htmlPath), relative)

  try {
    await access(resolved, constants.F_OK)
  } catch {
    errors.push(`Referenced file does not exist: ${ref}`)
  }
}

if (errors.length > 0) {
  console.error('Validation errors found:')
  for (const err of errors) {
    console.error(`- ${err}`)
  }
  process.exitCode = 1
} else {
  console.log('Custom validation passed')
}
