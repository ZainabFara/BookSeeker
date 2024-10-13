import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../assets/cover.jpg";
import "./BookList.css";


const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();


   //Lägg till fallback-bild om ingen omslagsbild finns från API:et
   const booksWithCover = books.map((singleBook) => {
    const { id, title, author, cover_img, page_count, published_date } = singleBook;
  
    return {
      id,
      title,
      author,
      cover_img: cover_img || coverImg, // Här använder vi coverImg som fallback-bild
      page_count,
      published_date
    };
  });  
  

      if (loading) return <Loading/>;

      return (
        <section className='booklist'>
          <div className='container'>
            <div className='section-title'>
              <h2>{resultTitle}</h2>
            </div>
            <div className='booklist-content grid'>
              {
                booksWithCover.slice(0, 30).map((item, index) => {

                  return (
                    <Book key={index} {...item} />
                  );
                })
              }
            </div>
          </div>
        </section>
      );
    };
    
    export default BookList;



