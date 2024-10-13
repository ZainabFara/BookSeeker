import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../assets/cover.jpg";
import "./BookList.css";


const BookList = () => {
   const { books, loading, resultatTitle} = useGlobalContext ();

   //Lägg till fallback-bild om ingen omslagsbild finns från API:et
      const booksWisthCover = books.mao((singleBook) => {
        const { id, volumeInfo } = singleBook;
        const { title, authors, imageLinks } = volumeInfo;
        

        return {
          id: id,
          title: title,
          author: authors ? authors.join (", "): "okänd författare",
          cover_img: imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : coverImg

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
                booksWithCovers.slice(0, 30).map((item, index) => {
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
