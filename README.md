# SOA English CAFE

A React-based web application for the SOA English CAFE community platform.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)

## 📖 Overview

SOA English CAFE is a web platform built with React that provides various pages and components for an English learning community. It includes features like navigation, seasonal content, event management, alumni networking, and more.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - Check with `npm --version`
- **Git** (optional, for cloning the repository)

### Verify Installation

```bash
node --version
npm --version
```

## Installation Guide

### Step 1: Clone or Navigate to the Project

If you haven't already, clone the repository or navigate to the project directory:

```bash
cd SOAEnglishCAFE
```

### Step 2: Install Core Dependencies

The project uses React and related libraries. Install the main dependencies:

```bash
npm install
```

This will install all packages listed in `package.json`, including:

- React
- React DOM
- React Scripts
- Web Vitals

The installation typically takes 3-5 minutes depending on your internet speed.

### Step 3: Install Additional Dependencies

The project requires additional UI and routing libraries:

```bash
npm install react-router-dom react-icons
```

These packages provide:

- **react-router-dom**: For client-side routing between pages
- **react-icons**: For icon components used throughout the application

### Verify Installation

Check that all dependencies were installed correctly:

```bash
npm list
```

You should see the following main packages:

```
├── react@18.2.0
├── react-dom@18.2.0
├── react-scripts@5.0.1
├── react-router-dom@latest
└── react-icons@latest
```

## Running the Development Server

### Start the Server

Run the following command in the project directory:

```bash
npm start
```

### Access the Application

After running `npm start`, the application will automatically open in your default browser. If it doesn't, manually navigate to:

- **Local**: http://localhost:3000
- **On Your Network**: http://192.168.29.243:3000 (or your local IP)

You should see:

```
You can now view soa-english-cafe in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.29.243:3000

webpack compiled successfully
```

### Development Features

- **Hot Reloading**: Any changes you make to files will automatically refresh the browser
- **Error Overlay**: Compilation errors appear directly in the browser for quick debugging
- **Development Build**: The build is not optimized for production

### Stop the Server

Press `Ctrl + C` in the terminal to stop the development server.

## Project Structure

```
SOAEnglishCAFE/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── navbar.jsx      # Navigation bar component
│   │   ├── navbar.css
│   │   ├── footer.jsx      # Footer component
│   │   ├── footer.css
│   │   └── seasonal/       # Seasonal content components
│   │       ├── Autumn.jsx
│   │       ├── Winter.jsx
│   │       ├── SeasonalLayer.jsx
│   │       └── seasonal.css
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Alum.jsx        # Alumni page
│   │   └── Crew.jsx        # Team/Crew page
│   ├── styles/             # CSS files for pages
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Contact.css
│   │   ├── Events.css
│   │   ├── Newsletter.css
│   │   ├── Alum.css
│   │   └── Crew.css
│   ├── assets/             # Images, media files
│   ├── App.jsx             # Main App component
│   ├── App.css
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
├── .git/                   # Git repository
└── README.md              # This file
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Opens http://localhost:3000 in your browser.

```bash
npm start
```

### `npm build`

Builds the app for production to the `build` folder.

```bash
npm build
```

This command optimizes the build for the best performance:

- Minifies JavaScript and CSS
- Optimizes images
- Creates a production-ready bundle

### `npm test`

Launches the test runner in interactive watch mode.

```bash
npm test
```

### `npm eject` ⚠️

**Note: this is a one-way operation. Once you eject, you can't go back!**

Exposes all configuration files and dependencies. Use only if you need full control over the build configuration.

```bash
npm eject
```

## Technologies Used

### Core

- **React 18.2.0**: UI library for building interactive components
- **React DOM 18.2.0**: React rendering library for the web
- **React Scripts 5.0.1**: Build and configuration utilities

### Routing

- **React Router DOM**: Client-side routing for multi-page navigation
  - Enables seamless navigation between pages
  - Maintains browser history

### UI & Icons

- **React Icons**: Icon library with various icon sets
  - Font Awesome icons included
  - Easy-to-use icon components

### Styling

- **CSS**: Custom stylesheets for each component and page
  - Global styles in `index.css`
  - Component-scoped styles for modularity

### Development Tools

- **Webpack**: Module bundler
- **Babel**: JavaScript compiler for React syntax
- **ESLint**: Code quality tool

## Troubleshooting

### Issue: Port 3000 Already in Use

**Error**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solution**:

- Option 1: Stop the other process using port 3000
- Option 2: Use a different port:
  ```bash
  PORT=3001 npm start
  ```

### Issue: Module Not Found Errors

**Error**: `Module not found: Error: Can't resolve 'react-router-dom'`

**Solution**:
Ensure all dependencies are installed:

```bash
npm install
npm install react-router-dom react-icons
```

### Issue: Dependencies Won't Install

**Error**: `npm ERR! code ERESOLVE`

**Solution**:
Try using the legacy peer dependencies flag:

```bash
npm install --legacy-peer-deps
```

Or clear cache and reinstall:

```bash
npm cache clean --force
npm install
```

### Issue: Changes Not Showing in Browser

**Solution**:

- Clear browser cache (Ctrl + Shift + Delete)
- Hard refresh the page (Ctrl + Shift + R)
- Restart the development server (Ctrl + C, then `npm start`)

### Issue: "You need to enable JavaScript"

**Error**: Browser shows "You need to enable JavaScript to run this app"

**Solution**:

- Enable JavaScript in your browser settings
- Check that `public/index.html` exists and contains `<div id="root"></div>`
- Check that `src/index.js` correctly mounts the React app

### Issue: git Not Found (on Windows)

**Solution**:
Download and install [Git for Windows](https://git-scm.com/download/win)

## Development Workflow

1. **Make Code Changes**: Edit files in the `src/` directory
2. **Auto-Reload**: The browser automatically refreshes with your changes
3. **Check Console**: Open Developer Tools (F12) to see any errors
4. **Fix Issues**: Update code based on error messages
5. **Repeat**: Continue development with hot-reload feedback

## Building for Production

When ready to deploy:

```bash
npm build
```

This creates an optimized production build in the `build/` folder. All files are minified and optimized for performance.

## Common Development Commands

```bash
# Start development server
npm start

# Create production build
npm build

# Run tests
npm test

# Install a new package
npm install package-name

# Remove a package
npm uninstall package-name

# Check for security vulnerabilities
npm audit

# Update packages
npm update
```

## Additional Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Getting Help

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section above
2. Review error messages in the terminal and browser console
3. Check the official documentation for the library showing the error
4. Clear node_modules and reinstall:
   ```bash
   rm -r node_modules package-lock.json
   npm install
   ```

## Summary of Setup Steps

For a quick reference, here are all the essential setup steps:

```bash
# 1. Navigate to project
cd SOAEnglishCAFE

# 2. Install dependencies
npm install

# 3. Install additional libraries
npm install react-router-dom react-icons

# 4. Start development server
npm start

# 5. Open in browser
# http://localhost:3000
```

---

**Last Updated**: February 10, 2026

**Happy Coding! 🚀**
