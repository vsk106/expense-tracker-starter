# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

This is a single-component React app (Vite + React 19). All state and logic live in `src/App.jsx`:

- **State**: `transactions` array, form fields (`description`, `amount`, `type`, `category`), and filter fields (`filterType`, `filterCategory`)
- **Derived values**: `totalIncome`, `totalExpenses`, `balance` computed inline from `transactions`
- **Filtering**: `filteredTransactions` derived by chaining filters on type and category
- **Styling**: `src/App.css` (component styles) and `src/index.css` (global/reset styles)

## Known Issues (intentional for course)

- `amount` is stored as a string, so `totalIncome`/`totalExpenses` use string concatenation instead of numeric addition — fix with `parseFloat(t.amount)`
- One seed transaction ("Freelance Work") is typed as `"expense"` but categorized as `"salary"` — data inconsistency
- UI is intentionally basic/unstyled for improvement during the course
