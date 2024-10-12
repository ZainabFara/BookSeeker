import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchform from "../Searchform/Searchform";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
           <h2 className="header-title text-capitalize">Dive into the world of books that inspire.
           </h2><br/>
           <p className="header-text fs-18 fw-3">Searching for a book that resonates with your spirit? Explore our curated selections just for you.</p>
             <Searchform/>
        </div>
      </header>
    </div>
  );
};

export default Header;
