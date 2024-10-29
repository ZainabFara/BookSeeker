// src/components/BookList/Book.jsx
import React from "react";
import { Link } from "react-router-dom";
import coverImg from '../../assets/cover.jpg'; // Fallback-bild
import "./BookList.css";

const Book = ({ id, title, author, cover_img, published_date }) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img 
          src={cover_img} 
          alt="cover" 
          onError={(e) => e.target.src = coverImg} // Fallback om URL misslyckas
        />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${id}`}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author:</span> {author}
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">Published:</span> {published_date}
        </div>
      </div>
    </div>
  );
};

export default Book;


