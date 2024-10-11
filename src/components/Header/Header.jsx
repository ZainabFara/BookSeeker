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
           <h2 className="header-title text-capitalize">Find your book of choice.
           </h2><br/>
           <p className="header-text fs-18 fw-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Eveniet sed nam mollitia ullam, expedita ipsam dicta porro eligendi illum ea quo dignissimos, 
             sequi hic vitae sunt eius, ipsum ex doloremque.</p>
             <Searchform/>
        </div>
      </header>
    </div>
  );
};

export default Header;
