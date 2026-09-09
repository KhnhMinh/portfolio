# AGENTS.md

## Scope

This document is intentionally evidence-based. It is derived only from the current repository state on July 16, 2026, using `package.json`, `package-lock.json`, `npm ls --depth=0`, TypeScript/Vite/ESLint/Tailwind config files, and the code under `src/` and `public/`.

If the repo changes in a way that introduces a new layer, tool, or convention, update this file in the same change.

## Project overview

Evidence: `src/main.tsx`, `src/App.tsx`, `src/sections/*`, `public/*`

- This repo is a frontend-only personal portfolio built as a single-page React application.
- `src/main.tsx` bootstraps the app, wraps it with `ThemeProvider` and `LanguageProvider`, and renders `App`.
- `src/App.tsx` is the page shell. It renders `Navbar`, the section components (`Hero`, `About`, `Projects`, `Experience`, `Education`, `Contact`), and a footer.
- Static images, logos, and icons are served from `public/` and referenced with root-relative paths such as `/images/...`, `/logos/...`, and `/icons/...`.
- There is no backend service, API client layer, database layer, migration system, or test runner in this repo today.

## Tech stack and actual versions

Evidence: `package.json`, `package-lock.json`, `npm ls --depth=0`, `vite.config.ts`, `tsconfig.app.json`, `eslint.config.js`, `postcss.config.js`, `tailwind.config.js`

- Package manager in use: `npm` (`package-lock.json` is present).
- Runtime UI: React `19.2.1`, React DOM `19.2.1`.
- Build tool: Vite `7.2.6`.
- React integration: `@vitejs/plugin-react` `5.1.1`.
- React compiler plugin: `babel-plugin-react-compiler` `1.0.0`.
- Language: TypeScript `5.9.3`.
- Styling: Tailwind CSS `4.1.17`, `@tailwindcss/postcss` `4.1.17`, PostCSS `8.5.6`, Autoprefixer `10.4.22`.
- Animation: Framer Motion `12.23.25`.
- Icons: `lucide-react` `0.556.0`.
- Linting: ESLint `9.39.1`, `@eslint/js` `9.39.1`, `typescript-eslint` `8.48.1`, `eslint-plugin-react-hooks` `7.0.1`, `eslint-plugin-react-refresh` `0.4.24`.
- Utility dependencies installed but not imported anywhere under `src/`: `clsx` `2.1.1`, `tailwind-merge` `3.4.0`.
- TypeScript app config is strict: `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`, `noEmit`, bundler module resolution, and `jsx: react-jsx`.
- Vite is configured with the React plugin and the React compiler Babel plugin.
- `README.md` says Node `>=18.x` and npm `>=9.x`, but `package.json` does not define an `engines` field, so treat that as guidance rather than an enforced constraint.

## Current architecture

Evidence: `src/main.tsx`, `src/App.tsx`, import graph under `src/`

- `src/main.tsx`: application bootstrap and top-level providers.
- `src/App.tsx`: page-level composition only.
- `src/sections/*`: page sections containing most content and section-local data arrays.
- `src/components/*`: reusable UI pieces and smaller interactive elements such as `Navbar`, `ThemeToggle`, `LanguageToggle`, and `TypingAnimation`.
- `src/contexts/*`: application-wide UI state for theme and language.
- `src/hooks/*`: hook wrappers over context access. Right now only `useLanguage` exists as a separate hook; `useTheme` lives in `ThemeContext.tsx`.
- `src/translations/index.ts`: translation dictionary for `en` and `vi`.
- `src/index.css`: global CSS, theme tokens, custom utility classes, and light/dark overrides.
- `public/*`: static assets referenced directly from JSX.

## Dependency rules between layers

Evidence: import graph from `src/`, especially `src/main.tsx`, `src/App.tsx`, `src/contexts/LanguageContext.tsx`, `src/hooks/useLanguage.ts`

- Keep `src/main.tsx` as the bootstrap layer. It should wire providers and render the app root.
- Keep `src/App.tsx` as the page shell that composes sections and shared layout pieces.
- `sections/` may depend on `components/` and `hooks/`. That is the current pattern across `Hero`, `About`, `Projects`, `Experience`, `Education`, and `Contact`.
- `components/` may depend on React, external UI libraries, sibling components, hooks, and theme/language access.
- `hooks/` should stay thin and context-oriented. `useLanguage` currently wraps `LanguageContext` only.
- `contexts/` own global UI state and may depend on `translations/`. `LanguageContext.tsx` is currently the only place importing `translations`.
- `translations/` is a leaf data module. Do not make it depend on React code.
- Do not introduce reverse dependencies from `contexts/` or `hooks/` into `sections/`.
- Keep static assets under `public/` and continue using root-relative asset URLs from JSX.

## Coding conventions

Evidence: `src/**/*.tsx`, `src/**/*.ts`, `src/index.css`, `eslint.config.js`

- Use React function components and hooks. No class components exist in the repo.
- Prefer named exports for components, hooks, and providers. Current exception: `App` is the default export in `src/App.tsx`.
- Keep small TypeScript types and interfaces near the code that uses them, for example `Theme`, `ThemeContextType`, `Language`, `LanguageContextType`, `LocalizedText`, and component prop interfaces.
- Keep section-specific static content close to the section that renders it. Current examples include `projects` in `Projects.tsx`, `experiences` in `Experience.tsx`, `education` in `Education.tsx`, and `skills` / `techStackCategories` in `About.tsx`.
- Use the translation dictionary plus `t(key)` for translatable UI copy. This pattern is established by `LanguageContext.tsx`, `useLanguage.ts`, and multiple sections/components.
- Do not claim the UI is fully localized. Some visible strings are still hardcoded in English today, for example `View Projects` and `Contact Me` in `src/sections/Hero.tsx` and `Menu` in `src/components/Navbar.tsx`.
- When editing a surface that already uses `t(...)`, extend `src/translations/index.ts` instead of adding more hardcoded bilingual UI strings in-place.
- Use Tailwind utility classes for component styling and keep global theme behavior in `src/index.css`.
- Theme switching is driven by `data-theme` on `document.documentElement`. Light/dark behavior is implemented in CSS, not in a third-party theming system.
- Follow the local style of the file you are editing. The repo is currently mixed on semicolons and formatting style between files, and there is no formatter config to normalize it.
- Do not do repo-wide formatting churn as a cleanup task. There is no Prettier/Biome formatting contract in the repo today.

## Error handling

Evidence: `src/contexts/ThemeContext.tsx`, `src/hooks/useLanguage.ts`, `src/contexts/LanguageContext.tsx`, `src/sections/Contact.tsx`

- Missing provider access is treated as a hard error. `useTheme()` throws if used outside `ThemeProvider`, and `useLanguage()` throws if used outside `LanguageProvider`.
- Translation lookup falls back in this order: current language key, then English key, then the raw key string.
- There is no global error boundary in the repo.
- There is no centralized logger or shared async error abstraction in the repo.
- `Contact.tsx` currently uses local form state, `console.log`, reset, and `alert` for success feedback. That is a local stub, not a project-wide network or error-handling convention.
- If you introduce async flows, state clearly in code and docs that you are introducing a new local pattern or a new shared pattern, then update this file accordingly.

## API response conventions

Evidence: search of `src/` shows no `fetch`, `axios`, or API client module

- No API response contract is established in this repo because there is no API consumption layer today.
- Do not invent a success envelope, error envelope, pagination contract, or client abstraction in documentation or review comments unless the corresponding code is actually being added.
- If an API layer is introduced later, define its types close to that layer and update this file in the same change.

## Database and migration rules

Evidence: repo contains no ORM config, no migration directory, no SQL files, and no database-related runtime code

- No database convention is established in this repo today.
- No migration tool is established in this repo today.
- Do not refer to Prisma, Drizzle, TypeORM, Sequelize, Knex, Flyway, or raw SQL migrations as if they are project standards unless they are actually added.
- If a database layer is introduced, add its commands, directories, and migration rules to this file in the same change.

## Testing rules

Evidence: no `test` script in `package.json`, no test dependencies, no test files under the repo

- No automated test framework is configured in this repo today.
- No `npm test` / `npm run test` command exists in this repo today.
- Do not claim test coverage, snapshot coverage, E2E coverage, or "all tests passed" unless a real test suite exists and was run.
- The current automated verification available in-repo is lint plus TypeScript build via `npm run lint` and `npm run build`.
- If you add tests, add the dependency, config, and `package.json` script in the same change, then update this file.

## Commands

Evidence: `package.json` scripts, TypeScript config files

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Type-check only: `npm exec tsc -b`
- Build: `npm run build`
- Preview production build: `npm run preview`
- Format: no supported command currently exists in `package.json`
- Test: no supported command currently exists in `package.json`

Notes:

- `npm run build` already runs `tsc -b && vite build`.
- `README.md` mentions `npm run format`, but that script does not exist in `package.json`. Prefer `package.json` over `README.md` when they conflict.

## Process before changing code

Evidence: current architecture and config layout

- Read the affected component plus any related hook, context, translation, CSS, and config files before editing.
- Check whether the UI surface already participates in translation through `useLanguage()` and `t(...)`.
- Check whether the change belongs in section-local data, `src/index.css`, or `public/` assets before creating new abstractions.
- Check whether the task introduces a new convention, tool, or layer that should also update `AGENTS.md`.
- Because there is no formatter contract, avoid mixing functional changes with broad style-only rewrites.

## Process after changing code

Evidence: available scripts in `package.json`

- For changes in `src/` or build/lint config, run `npm run lint` and `npm run build`.
- If you only need a fast type-only check, `npm exec tsc -b` matches the build pipeline's TypeScript step.
- For docs-only changes, at minimum verify that the referenced commands, paths, and filenames still exist.
- If you changed visible copy on a surface that already uses translations, update both `en` and `vi`.
- If you introduced a new tool, convention, layer, or command, update this file in the same change.

## Forbidden actions

Evidence: current repo state, import graph, and command set

- Do not invent backend, API, database, migration, or testing conventions that do not exist in this repo.
- Do not treat `README.md` as more authoritative than `package.json` and the actual tool config when they disagree.
- Do not tell people to run `npm run format` or `npm test`; those commands do not exist here today.
- Do not add repo-wide formatting churn as an unrelated cleanup step.
- Do not introduce reverse dependencies from `contexts/` or `hooks/` into `sections/`.
- Do not call `useLanguage()` or `useTheme()` outside their provider tree.
- Do not describe a feature as localized when the strings still exist only in one language.
- Do not assume `clsx` or `tailwind-merge` are part of the active coding pattern just because they are installed; they are not imported under `src/` today.

## No hallucinate policy

- Every important claim in analysis, review, or documentation must be traceable to code, config, asset files, or a command actually run in this repo.
- When evidence is missing, write `not present in this repo` or `no convention established`, not a guess.
- Distinguish clearly between `observed current state` and `new convention introduced by this change`.
- Verify commands from `package.json` before telling anyone to run them.
- Verify versions from `npm ls`, `package.json`, or the lockfile before documenting them.
- Verify architecture from file structure and imports before describing layers or responsibilities.
- If you add a new tool, framework, or workflow, document it in this file in the same change so future work stays evidence-based.
