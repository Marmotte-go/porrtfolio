import "./Navbar.scss";
import Switch from "./Switch";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

const Navbar = () => {
  const {theme} = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <nav id="navbar" className={`navbar ${isLight?'light':''}`}>
      <h1 className="logo">YUANKE</h1>
      <div className="right">
        <Switch />
        <ul className="nav-links">
          <li>Home</li>
          <li>My Story</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
