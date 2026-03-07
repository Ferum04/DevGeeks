# AI Knowledge Base & Project Documentation

## 📌 Project Overview
**Title:** High-Fidelity Educational Web App / DevGeeks Documentation  
**Description:** A React-based web application serving as a landing page and documentation platform. The documentation currently focuses on hardware selection, Proxmox installation, and setting up a "Musi Server". 

## 🛠️ Technology Stack
- **Framework:** React 18 + Vite
- **Routing:** React Router v7 (`src/app/routes.ts`)
- **Styling:** Tailwind CSS (`@tailwindcss/vite`), Vanilla custom CSS variables (`src/styles/theme.css`), Emotion.
- **UI Components:** Radix UI primitives (`@radix-ui/react-*`), Lucide React icons, Framer Motion for animations.
- **Forms & State:** React Hook Form
- **Utilities:** `date-fns`, `clsx`, `tailwind-merge`

## 📂 Architecture & Folder Structure
- `/src/main.tsx` - Vite application entry point. Renders the main `App` wrapped in `AuthProvider`.
- `/src/app/App.tsx` - App root component establishing the `RouterProvider`.
- `/src/app/routes.ts` - Centralized routing configuration.
  - `/` → `Landing`
  - `/register` → `Register`
  - `/docs` → `DocsLayout` with sub-pages (`introduction`, `hardware-selection`, `proxmox-installation`, `musi-server`)
- `/src/app/pages/` - Top-level page components for routes.
- `/src/app/components/` - Reusable UI components. They are categorized into `ui/` (base components like buttons, dialogs), `layout/` (structural components), and `figma/` (potentially imported or synchronized components).
- `/src/styles/` - Contains `theme.css` (custom properties/variables for theming), `tailwind.css`, and global `index.css`.

## 🧪 Test-Driven Development (TDD) Guidelines
As per project requirements, **TDD (Test-Driven Development)** must be strictly followed during any further development or modifications.

**Rules for AI Assistants:**
1. **Write Tests First:** Before implementing any new component, utility function, or fixing a bug, first write a failing test (Red phase).
2. **Implement:** Write the minimum amount of code to make the test pass (Green phase).
3. **Refactor:** Clean up the code while ensuring tests still pass.
4. **Testing Stack:** Currently, the project lacks a testing framework in `package.json`. Before starting any feature work, the AI *must* propose and install a testing stack. The recommended stack for this Vite/React project is:
   - `vitest` (Test runner)
   - `@testing-library/react` & `@testing-library/dom` (Component testing)
   - `@testing-library/jest-dom` (Custom matchers)
   - `jsdom` (DOM environment)
5. **Coverage:** Ensure critical user paths, complex UI state configurations, and utility functions are thoroughly tested.

## 📝 Important Patterns
- **Styling Paradigm:** The application relies heavily on Radix UI components combined with Tailwind utility classes. When creating new components, stick to existing UI primitives located in `/src/app/components/ui`.
- **Theme Support:** Uses `next-themes` and a robust `theme.css` holding CSS variables for colors, spacing, and component-specific values. When assigning colors, prefer semantic CSS variables over hardcoded hex values.

---
*Note to AI Assistants: Always read this file to understand the context and strict rules (especially TDD) before executing user requests on this codebase.*
