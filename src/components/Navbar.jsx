import "./Navbar.scss";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Switch from "./Switch";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <nav id="navbar" className={`navbar ${isLight ? "light" : ""}`}>
      <h1 className="logo">YUANKE</h1>
      
      <div className="right">
      <Switch />
        <ul className="nav-links">
          <li>Home</li>
          <li>My Story</li>
          <li id="work-list" >
            <div className="dropdown-works" >
              <span>Works ▾</span>
              <div className="dropdown-content" >
                <ul>
                  <li>AI stuffs</li>
                  <li>Fullstack Blog</li>
                  <li>Webpage Games</li>
                  <li>Handy Tools</li>
                  <li>CSS Effects</li>
                </ul>
              </div>
            </div>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
