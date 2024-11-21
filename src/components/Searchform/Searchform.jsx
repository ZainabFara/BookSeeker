// src/components/SearchForm/SearchForm.jsx
import React, { useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SearchForm.css';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    
    if (tempSearchTerm === "") {
        setSearchTerm(""); 
        setResultTitle("Showing Popular Books...");
    } else {
        setSearchTerm(tempSearchTerm);
    }
};

  
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Söker..."
                ref={searchText}
                writingsuggestions="true"
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-black" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;


