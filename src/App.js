import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Library from "./Library";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading books:", error);
        setLoading(false);
      });
  }, []);

  const handleShelfChange = (book, shelf) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((b) =>
        b.id === book.id ? { ...b, shelf } : b
      );
      
      const bookExists = prevBooks.some((b) => b.id === book.id);
      if (!bookExists && shelf !== "none") {
        updatedBooks.push({ ...book, shelf });
      }
      
      return shelf === "none" 
        ? updatedBooks.filter((b) => b.id !== book.id)
        : updatedBooks;
    });

    BooksAPI.update(book, shelf).catch((error) => {
      console.error("Error updating book shelf:", error);
      BooksAPI.getAll().then(setBooks);
    });
  };

  if (loading) {
    return (
      <div className="app">
        <div style={{ padding: "20px", textAlign: "center" }}>
          Loading your library...
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Library books={books} onShelfChange={handleShelfChange} />}
          />
          <Route
            path="/search"
            element={<Search books={books} onShelfChange={handleShelfChange} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
