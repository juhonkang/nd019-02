import PropTypes from "prop-types";

const Book = ({ book, onShelfChange, currentShelf }) => {
  const handleShelfChange = (event) => {
    const newShelf = event.target.value;
    if (newShelf !== currentShelf) {
      onShelfChange(book, newShelf);
    }
  };

  const getBookCover = () => {
    if (book.imageLinks && book.imageLinks.thumbnail) {
      return book.imageLinks.thumbnail;
    }
    return "";
  };

  const getAuthors = () => {
    if (book.authors) {
      return book.authors.join(", ");
    }
    return "Unknown Author";
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${getBookCover()}")`,
            backgroundColor: getBookCover() ? "transparent" : "#ccc",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={currentShelf || "none"} onChange={handleShelfChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title || "Unknown Title"}</div>
      <div className="book-authors">{getAuthors()}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  currentShelf: PropTypes.string,
};

export default Book;