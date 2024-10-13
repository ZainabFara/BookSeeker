import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = (book) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author</span>
          <span>{book.author}</span>
        </div>

        <div className="book-item-info-item page-count fs-15">
          <span className="text-capitalize fw-7">Pages: </span>
          <span>{book.page_count || "N/A"}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">Published: </span>
          <span>{book.published_date || "Unknown"}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
