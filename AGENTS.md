# Repository Guidelines

## Project Structure & Module Organization
This repository is a Create React App site deployed to GitHub Pages. Application code lives in `src/`, with the main page component in `src/taller_porcelana_fria_web.jsx` and the entry point in `src/index.js`. Tests live beside the code they cover, for example `src/taller_porcelana_fria_web.test.jsx`. Global Tailwind directives are in `src/index.css`; keep any extra shared styles in `src/styles.css`. Static files such as the HTML shell, manifest, and icons live in `public/`. Production output is generated into `build/` and should be treated as disposable.

## Build, Test, and Development Commands
Run `npm install` once to sync dependencies from `package-lock.json`. Use `npm start` for local development at `http://localhost:3000` with live reload. Use `npm test` for the interactive Jest watcher. For a single CI-style run, use `CI=true npm test -- --watch=false`. Use `npm run build` to create the optimized production bundle used by the Pages workflow in `.github/workflows/static.yml`.

## Coding Style & Naming Conventions
Follow the existing React style: functional components, hooks, and small helper functions in the same module when they are feature-specific. Use 2-space indentation, double quotes, and semicolons to match the current codebase. Name components in PascalCase, helpers and variables in camelCase, and test files as `*.test.jsx`. Prefer Tailwind utility classes inline in JSX; only move styles into CSS when they are global or repeated enough to justify extraction.

## Testing Guidelines
Testing uses Jest with React Testing Library and `@testing-library/jest-dom` via `src/setupTests.js`. There is no numeric coverage gate configured, so rely on behavior coverage: add or update tests whenever UI state, rendering, accessibility text, or `localStorage` behavior changes. Keep test names descriptive and user-focused, such as `it("toggles theme and persists the selected value", ...)`.

## Commit & Pull Request Guidelines
Recent history uses short, imperative subjects such as `Update index.js`, though quality is inconsistent. Prefer concise commit messages in the imperative mood, for example `Add dark mode persistence test`. Pull requests should include a brief summary, note any deployment impact, link related issues when available, and attach screenshots or short recordings for visible UI changes.
