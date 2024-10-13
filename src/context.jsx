import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("Sökning");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      console.log(data);

      if (data.items) {
        const newBooks = data.items.slice(0, 20).map((bookSingle) => {
          const { id, volumeInfo } = bookSingle;
          const { authors, imageLinks, pageCount, publishedDate, title } = volumeInfo;
        
          return {
            id,
            author: authors ? authors.join(", ") : "Okänd författare",
            cover_img: imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : coverImg,
            page_count: pageCount,
            published_date: publishedDate,
            title: title,
          };
        });
        

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


