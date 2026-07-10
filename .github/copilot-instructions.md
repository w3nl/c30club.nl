# Copilot Instructions For This Repository

Use these repository-specific rules when editing this project.

## Stack
- Static site only.
- Files in use:
  - docs/index.html
  - docs/styles.css
  - docs/main.js
  - docs/images/

## Do
- Keep implementation dependency-light and browser-native.
- Use explicit relative paths with ./ in HTML.
- Keep all JavaScript changes ESLint clean.
- Respect existing Dutch copy style: modern, clear, not overly hip.
- Make minimal, targeted changes unless broader refactor is requested.

## Do Not
- Do not introduce framework tooling or build pipelines for runtime code.
- Do not add external CDN dependencies unless explicitly requested.
- Do not reintroduce removed sections (for example contact form) without request.

## Validation Checklist
- npm run lint passes.
- Navigation links still point to existing sections.
- Referenced images/files exist.
- No obvious regressions in docs/index.html behavior.
