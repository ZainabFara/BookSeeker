import React, {useRef, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./Searchform.css";

const Searchform = () => {
  const {setSearchTerm,setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="fomr-control"
                placeholder="Söker..." ref ={searchText}
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

export default Searchform;
