---
"@nijesmik/eslint-config": minor
---

Add `@nijesmik/eslint-config/next` subpath export for Next.js projects. It bundles the base config together with the following:

- `@next/eslint-plugin-next` core-web-vitals rules
- `eslint-plugin-react-hooks` for hooks dependency validation
- `eslint-plugin-jsx-a11y` for accessibility checks (with Next.js `Image` alt-text support)
- `eslint-import-resolver-typescript` for tsconfig paths alias resolution
