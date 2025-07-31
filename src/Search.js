import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

const Search = ({ books, onShelfChange }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (query.trim()) {
      setIsSearching(true);
      timeoutId = setTimeout(() => {
        BooksAPI.search(query.trim(), 20)
          .then((results) => {
            if (results && !results.error) {
              const updatedResults = results.map((searchBook) => {
                const existingBook = books.find((book) => book.id === searchBook.id);
                return {
                  ...searchBook,
                  shelf: existingBook ? existingBook.shelf : "none",
                };
              });
              setSearchResults(updatedResults);
            } else {
              setSearchResults([]);
            }
            setIsSearching(false);
          })
          .catch(() => {
            setSearchResults([]);
            setIsSearching(false);
          });
      }, 300);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [query, books]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleQueryChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        {isSearching && <div>Searching...</div>}
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                currentShelf={book.shelf}
                onShelfChange={onShelfChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Search;