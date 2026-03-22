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

React 19 app built with Vite. State is managed in `src/App.jsx` and passed down to three components in `src/components/`:

- **`App.jsx`** — owns the `transactions` array and derived totals (`totalIncome`, `totalExpenses`, `balance`). Passes data/callbacks to child components.
- **`Summary.jsx`** — displays income, expenses, and balance cards. Receives all three totals as props.
- **`TransactionForm.jsx`** — owns its own form state (`description`, `amount`, `type`, `category`). Calls `onAdd` prop with the new transaction object on submit. Converts `amount` to float before passing up.
- **`TransactionList.jsx`** — owns filter state (`filterType`, `filterCategory`). Receives `transactions` as a prop and applies filters locally.

Styling: `src/App.css` (component styles), `src/index.css` (global/reset styles).

## Known Issues (intentional for course)

- One seed transaction ("Freelance Work") is typed as `"expense"` but categorized as `"salary"` — data inconsistency
- UI is intentionally basic/unstyled for improvement during the course
