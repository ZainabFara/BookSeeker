import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from '../../assets/cover.jpg';
import "./SingleBook.css";
import { FaArrowLeft } from "react-icons/fa";

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

   if (!book) {
      return (
         <div className="error-container">
            <h2 className="error-message">No book details available.</h2>
            <button className="flex flex-c back-btn" onClick={() => navigate("/book")}>
               <FaArrowLeft size={23} />
               <span className='fs-18 fw-6'>Go Back</span>
            </button>
         </div>
      );
   }

   return (
      <section className="single-book">
         <div className="container">
            <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
               <FaArrowLeft size={23} />
               <span className='fs-18 fw-6'>Go Back</span>
            </button>

            <div className='single-book-content grid'>
               <div className='single-book-img'>
                  <img src={book?.cover_img} alt="cover img" />
               </div>
               <div className='single-book-info'>
                  <div className='single-book-item title'>
                     <span className='fw-6 fs-24'>{book?.title}</span>
                  </div>
                  <div className='single-book-item description'>
                     <span className='fw-6 fs-24'>Description:</span>
                     <p>{book?.description}</p>
                  </div>
                  <div className='single-book-item subjects'>
                     <span className='fw-6'>Subjects:</span>
                     <div className='grid-container'>
                        {book?.subjects?.split(',').map((subject, index) => (
                           <span key={index}>{subject.trim()}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SingleBook;



