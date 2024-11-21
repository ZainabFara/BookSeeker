import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from '../../assets/cover.jpg';
import "./SingleBook.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const SingleBook = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [book, setBook] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);
      async function getSingleBook() {
         try {
            const response = await fetch(`${URL}${id}.json`);
            const data = await response.json();

            if (data) {
               const { description, title, covers, subject_places, subject_times, subjects } = data;
               const newBook = {
                  description: typeof description === 'object' ? description.value : description || "No description found",
                  title: title,
                  cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
                  subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
                  subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
                  subjects: subjects ? subjects.join(", ") : "No subjects found",
               };
               setBook(newBook);
            } else {
               setBook(null);
            }
            setLoading(false);
         } catch (error) {
            console.log(error);
            setLoading(false);
         }
      }
      getSingleBook();
   }, [id]);

   if (loading) return <Loading />;
   if (!book) return <h2>No book found</h2>;

   return (
      <section className="single-book">
         <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft size={20} /> Back
         </button>
         <div className="book-details">
            <div className="book-cover">
               <img src={book.cover_img} alt={book.title} />
            </div>
            <div className="book-info">
               <h2>{book.title}</h2>
               <p><strong>Description:</strong> {book.description}</p>
               <p><strong>Subject Places:</strong> {book.subject_places}</p>
               <p><strong>Subject Times:</strong> {book.subject_times}</p>
               <p><strong>Subjects:</strong> {book.subjects}</p>
            </div>
         </div>
      </section>
   );
};

export default SingleBook;

