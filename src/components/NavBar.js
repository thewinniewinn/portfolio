import "./NavBar.css";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
        <h1>Winnie</h1>
      </Link>
      <ul className={click ? "nav-menu active" :"nav-menu"}>
        <li>
          <Link to="/blogs">
            <h1>Blogs</h1>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <h1>Projects</h1>
          </Link>
        </li>
        <li>
          <Link to="/resources">
            <h1>Resources</h1>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "black"}}/>) : (<FaBars size={20} style={{ color: "black"}}/>)}
        
        
      </div>
    </div>
  );
}

export default NavBar;
