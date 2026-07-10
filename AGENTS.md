# AGENTS.md

This repository is a static website for Volvo C30 Club NL.

## Project Scope
- Deploy target: GitHub Pages style site from docs/.
- Main page: docs/index.html.
- Styling: docs/styles.css.
- Browser logic: docs/main.js.
- Assets: docs/images/.

## Technical Rules
- Keep the site static: plain HTML, CSS, and JavaScript only.
- No runtime frameworks and no build step.
- Use explicit relative paths with ./ for local assets.
- Keep JavaScript lint-clean with ESLint and @trojs/lint setup.

## Lint And CI
- Run checks locally with:
  - npm run validate
  - npm run lint:fix
- CI lint workflow is in .github/workflows/lint.yml.
- Keep docs/main.js compliant with current lint rules.

## Content And UX Agreements
- Language: Dutch.
- Tone: modern and friendly, but not too slang-heavy.
- Keep copy understandable for a broad audience.
- Contact form is removed for now.

## Editing Guidelines
- Prefer small, focused edits.
- Preserve current structure unless a change is requested.
- When adding media references, verify files exist under docs/images/.
- If adding sections back (for example gallery/contact), also update nav links and related JS.
