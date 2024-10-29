// src/context.jsx
import React, { useState, useContext, useEffect, useCallback } from "react";
import coverImg from './assets/cover.jpg'; // Fallback-bild

const URL = "https://libris.kb.se/xsearch?query=";
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("Sökning");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const cleanTitle = (title) => {
    if (!title) return "Okänd titel";
    return title.replace(/\[.*?\]/g, '').trim();
  };

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}&format=json`);
      const data = await response.json();
      
      console.log("API response:", data);

      if (data.xsearch && data.xsearch.list && data.xsearch.list.length > 0) {
        const newBooks = data.xsearch.list.slice(0, 20).map((bookSingle) => {
          const { identifier, title, creator, date, recordID } = bookSingle;

          // Kontrollera om identifier är en array och hitta ISBN
          let isbn;
          if (Array.isArray(identifier)) {
            const isbnItem = identifier.find(id => id.includes('ISBN'));
            isbn = isbnItem ? isbnItem.replace("ISBN:", "").trim() : null;
          }

          // Bygg omslagsbild-URL baserat på ISBN eller använd fallback-bild
          const coverImgUrl = isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg` : coverImg;

          console.log(
            'Titel:', cleanTitle(title), 
            'Författare:', creator || 'Okänd författare', 
            'ISBN:', isbn || 'Ingen ISBN', 
            'Cover URL:', coverImgUrl
          );

          return {
            id: recordID,
            title: cleanTitle(title),
            author: creator || "Okänd författare",
            cover_img: coverImgUrl,
            published_date: date || "Okänd publicering",
          };
        });

        setBooks(newBooks);
        setResultTitle("Your Search Result");
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

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









