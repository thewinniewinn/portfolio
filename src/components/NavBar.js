import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/" className="logo">
        Winnie
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "black" }} />
        ) : (
          <FaBars size={20} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
