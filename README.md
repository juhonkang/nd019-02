# MyReads Project

A React application that allows you to select and categorize books you have read, are currently reading, or want to read. This is a fully functional bookshelf app built with React and React Router that uses the Udacity Books API.

## Features

- **Three Bookshelves**: Categorize books into "Currently Reading", "Want to Read", and "Read"
- **Book Management**: Move books between shelves with an intuitive dropdown control
- **Search Functionality**: Search for new books to add to your library with real-time results
- **Persistent State**: Book selections persist between page refreshes and navigation
- **Responsive Design**: Clean, modern interface that works across devices

## Quick Start

To get started with MyReads:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3002` (or the next available port)

3. **Build for production:**
   ```bash
   npm run build
   ```

## Installation & Launch Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm package manager

### Development
1. Clone this repository
2. Navigate to the project directory
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to start the development server
5. Open your browser to the provided localhost URL

### Production
1. Run `npm run build` to create an optimized production build
2. Run `npm start` to serve the production build on port 3001

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── index.html # You can change the title and the icon
├── vite.config.js # Do not change anything if you are working in the Udacity Workspace
├── public
│   ├── vite.svg # Vite Icon, You may change if you wish.
│   └── icons # Helpful images for your app. Use at your discretion.
│       ├── add.svg
│       ├── arrow-back.svg
│       └── arrow-drop-down.svg
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── main.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
