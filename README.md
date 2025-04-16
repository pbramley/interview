![CI](https://github.com/pbramley/interview/actions/workflows/ci.yml/badge.svg)

# React + TypeScript Baseline Project

This repository is a clean, modern React + TypeScript setup intended for technical interviews, coding exercises, and small experiments. It includes sensible defaults for styling, linting, routing, and component structure, designed to let me hit the ground running.

## ✨ Tech Stack

- ⚛️ [React](https://reactjs.org/)
- 🧠 [TypeScript](https://www.typescriptlang.org/)
- 🛠 [Vite](https://vitejs.dev/) for fast dev builds
- 📦 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for linting and formatting
- 🧭 [React Router](https://reactrouter.com/) for future multi-page setups
- 🧪 [Testing Library](https://testing-library.com/) (optional)
- 💅 CSS Modules for scoped styles
- 📁 Path aliasing (`@components`, `@utils`, etc.)

## 🧱 Folder Structure

```plaintext
src/
├── components/         # Shared UI components
│   ├── shared/         # Shared components across the app
│   ├── domain/         # Domain-specific components
├── context/            # Context providers for shared state
├── pages/              # Route-level components
├── utils/              # Utility functions
│   ├── constants/      # Shared constants
├── hooks/              # Custom React hooks
├── services/           # API logic or data access
└── App.tsx             # Entry component
```

## 🚀 Getting Started

```bash
npm install
npm run dev
Then open http://localhost:5173 in your browser.

🧹 Code Quality
This project enforces code quality and consistency with:

ESLint for catching issues
Prettier for formatting
Auto-format on save in VSCode (see .vscode/settings.json)

Run manually:
npm run lint
npm run format

🧪 Testing (Optional)
If you enable testing, structure tests under __tests__ or co-located with components using .test.tsx.

🤝 Usage
This repo is for personal use, interview prep, and technical exercises. You’re welcome to explore and fork it.

Licensed under the MIT License.
```
