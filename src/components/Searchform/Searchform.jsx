import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Searchform.css";

const Searchform = () => {
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="fomr-control"
                placeholder="Söker..."
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
