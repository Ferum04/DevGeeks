# DevGeeks: Educational Web App

DevGeeks is a high-fidelity educational web application designed to host technical documentation, guides, and tutorials. It features a modern, responsive layout built with a focus on user experience and clean design methodologies. Currently, the project serves as a structured portal for advanced technical setups, such as server configurations and hardware recommendations.

The project layout and styling are heavily inspired by modern design trends, making it an excellent template for educational content delivery.

---

## Key Features

- **Modern Landing Page**: A welcoming and visually appealing introduction to the platform.
- **Structured Documentation Portal**: Includes a dedicated documentation layout (`/docs`) with collapsible sidebars and responsive navigation.
- **In-Depth Guides**: Built-in topics currently cover:
  - Hardware Selection
  - Proxmox Virtual Environment Installation
  - Music Server Setup and Configuration
- **User Registration Flow**: A dedicated view for onboarding new users (`/register`).
- **High-Fidelity UI Components**: Built using a robust ecosystem of accessible primitives and styling tools.

## Tech Stack

This project leverages a modern React ecosystem to deliver a fast and scalable web application:
- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized builds.
- **Routing**: [React Router v7](https://reactrouter.com/) for seamless client-side navigation.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first responsive design.
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) for unstyled, accessible components (Dialogs, Menus, Accordions, etc.).
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, consistent iconography.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth visual transitions.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd DevGeeks
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   [http://localhost:5173/](http://localhost:5173/)

---

## Project Structure

A quick look at the core structure of the application:

```text
src/
├── app/
│   ├── components/      # Reusable UI elements (buttons, cards, menus, etc.)
│   ├── pages/           # Page-level components
│   │   ├── docs/        # Content for the documentation portal
│   │   ├── docs-layout  # The main shell for the documentation section
│   │   ├── landing      # Landing page view
│   │   └── register     # Registration page view
│   ├── App.tsx          # Root application component
│   └── routes.ts        # Route definitions and mapping
├── styles/              # Global CSS and Tailwind configurations
└── main.tsx             # Entry point of the React application
```

---

## Attribution & Design

This project's initial design structure is based on the "High-Fidelity Educational Web App" concept. 
Original Figma design concepts can be viewed [here](https://www.figma.com/design/DEnuhBac3KMDni2kfDwmVS/High-Fidelity-Educational-Web-App).

## License

This project is open-source and available under the standard usage constraints of its original design attributions.