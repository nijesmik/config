# @nijesmik/eslint-config

## 0.3.0

### Minor Changes

- ec7f3b9: Add `@nijesmik/eslint-config/next` subpath export for Next.js projects. It bundles the base config together with the following:
  - `@next/eslint-plugin-next` core-web-vitals rules
  - `eslint-plugin-react-hooks` for hooks dependency validation
  - `eslint-plugin-jsx-a11y` for accessibility checks (with Next.js `Image` alt-text support)
  - `eslint-import-resolver-typescript` for tsconfig paths alias resolution

## 0.2.0

### Minor Changes

- 390fa55: Apply perfectionist sort rules to all source files (not just `src/`), and exclude `*.config.{js,mjs,cjs,ts,mts,cts}` files from these rules.

## 0.1.2

### Patch Changes

- Disable `perfectionist/sort-objects` rule and remove custom `perfectionist/sort-imports` configuration

## 0.1.1

### Patch Changes

- Publish compiled JavaScript with type definitions instead of TypeScript source

## 0.1.0

### Minor Changes

- Initial release
