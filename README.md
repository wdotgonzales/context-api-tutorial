# Context API Tutorial - React App

This project demonstrates how to manage user state using the **React Context API**. The app includes simple login functionality, where users can log in and view their profile information, utilizing context for state management.

## Features

- **Login Form:** A form that allows the user to log in with a username and password.
- **Profile Page:** Displays the username and password of the logged-in user.
- **Context API:** Manages the user's login state across components.

## Technologies

- **React** (with Hooks)
- **Context API** for state management
- **Vite** for fast build tooling

## Folder Structure

├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   ├── context
│   │   ├── UserContext.js
│   │   ├── UserContextProvider.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js


## Components Overview

### `Login.jsx`
- Provides a simple form for the user to log in by entering their username and password.
- When submitted, the form triggers the `setUser` function from `UserContext`, updating the user state.

### `Profile.jsx`
- Displays the user's profile information (username and password) if they are logged in.
- If no user is logged in, it displays a "Not Logged In" message.

### `UserContext.js`
- Creates the context for sharing the user state across the app.

### `UserContextProvider.jsx`
- A wrapper component that provides the context to all child components (i.e., `Login` and `Profile`).
