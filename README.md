# SOA English CAFE

A React-based web application (Frontend) and Django-based Rest API (Backend) for the SOA English CAFE community platform.

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

SOA English CAFE is a web platform built with React and Django that provides various pages and components for an English learning community. It includes features like navigation, seasonal content, event management, alumni networking, contact forms, and document processing capabilities.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - Check with `npm --version`
- **Python** (v3.10 or higher) - [Download](https://www.python.org/downloads/)
- **Git** (optional, for cloning the repository)

### Verify Installation

```bash
node --version
npm --version
python --version
```

## Installation Guide

### Step 1: Clone or Navigate to the Project

If you haven't already, clone the repository or navigate to the project directory:

```bash
cd SOA-English-CAFE
```

### Step 2: Set up the Python Backend

The backend is built with Django and handles features like the Contact Form emails and document processing.

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a Virtual Environment (Recommended):
   - **Windows:**
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
3. Install the Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   *Note: If `requirements.txt` fails, you can install the required packages manually:*
   ```bash
   pip install django djangorestframework django-cors-headers pdf2image python-docx docx2pdf Pillow
   ```
4. Run database migrations:
   ```bash
   python manage.py migrate
   ```

### Step 3: Set up the React Frontend

Open a **new** terminal window, navigate back to the root project folder (`SOA-English-CAFE`), and install the frontend dependencies:

```bash
npm install
npm install react-router-dom react-icons
```

## Running the Development Server

To see the full application working, you need to run **both** the frontend and the backend servers simultaneously.

### 1. Start the Django Backend

In your first terminal, ensure your virtual environment is activated and you are in the `/backend` folder.

```bash
python manage.py runserver
```
The backend API will run on **http://localhost:8000**.

### 2. Start the React Frontend

In your second terminal (in the root folder), start the React app:

```bash
npm start
```
The application will automatically open in your browser at **http://localhost:3000**.

## Project Structure

```
SOA-English-CAFE/
├── backend/                # Django Backend API
│   ├── api/                # Core API views & models
│   ├── backend/            # Main Django settings
│   ├── manage.py           # Django CLI utility
│   └── requirements.txt    # Python dependencies
├── public/                 # Static HTML files
├── src/                    # React Frontend
│   ├── components/         # Reusable UI parts (Navbar, Footer, etc.)
│   ├── pages/              # Main App Routes (Home, Contact, etc.)
│   ├── styles/             # CSS files
│   ├── App.jsx             # Main React component
│   └── index.js            # React entry point
├── package.json            # Node.js dependencies
└── README.md               # Project documentation
```

## Available Scripts (Frontend)

In the root directory, you can run:

### `npm start`
Runs the app in development mode. Opens http://localhost:3000 in your browser.

### `npm build`
Builds the app for production to the `build` folder.

## Technologies Used

### Frontend
- **React 18.2.0**: UI library
- **React Router DOM**: Client-side routing
- **React Icons**: Icon library

### Backend
- **Django 5.x**: Python Web Framework
- **Django REST Framework**: For API Creation
- **django-cors-headers**: To allow React to communicate with Django

## Troubleshooting

### Issue: Port 3000 Already in Use
**Solution**:
```bash
PORT=3001 npm start
```

### Issue: Backend Cannot Receive Contact Form Emails
**Solution**:
Make sure the Django backend is running (`python manage.py runserver`). The frontend makes POST requests to `http://localhost:8000/api/contact/`. You also need to configure your real SMTP credentials in `backend/backend/settings.py` to actually send emails.

### Issue: Module Not Found Errors (Frontend)
Ensure all dependencies are installed:
```bash
npm install
```

### Issue: Dependencies Won't Install (Frontend)
Try using the legacy peer dependencies flag:
```bash
npm install --legacy-peer-deps
```

---

**Last Updated**: February 28, 2026

**Happy Coding! 🚀**
