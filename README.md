# ⚛️ Project Name

Netfilx-Gpt - a clone of netflix along with chat GPT AI feature to search for movies.

🔗

---

## 🚀 Features

- **Responsive UI**:
- **State Management**: Handled cleanly via Context API .
- **Data Fetching**: TMDB
- **Authentication**: Secure login/signup system .
- **Theme Toggle**:

## 🛠️ Tech Stack

- **Frontend**: React (v19), JavaScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v7)
- **Authentication and deployment**:Firebase
- **Form Validation**:react-hook-form

## 💻 Getting Started

Follow these steps to clone and run the application locally on your machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode at `http://localhost:5173`.
- `npm run build`: Bundles the app into static files for production inside the `dist/` or `build/` folder.
- `npm run preview`: Locally previews your production build.

---

## 📂 Project Structure

```text
├── public/                # Static assets (favicons, icons)
├── src/
│   ├── assets/            # Global images and fonts
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks (useAuth, useFetch)
│   ├── App.jsx            # Main application layout and routes
│   ├── index.css          # for importing tailwindcss
│   └── main.jsx           # React DOM application entry point
├── eslint.config.js       # configure ESLint foe a react application built with vite
└── package.json           # Project dependencies and operational scripts

```
