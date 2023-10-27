import "./Navbar.scss";
import { useContext} from "react";
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
          <li><a href="/">Home</a></li>
          <li id="work-list" >
            <div className="dropdown-works" >
              <span>Works ▾</span>
              <div className="dropdown-content" >
                <ul>
                  <li><a href="https://ai.yuankedev.fun" target="_blank" rel="noopener noreferrer">AI stuffs</a></li>
                  <li><a href="https://blog.yuankedev.fun" target="_blank" rel="noopener noreferrer">Fullstack Blog</a></li>
                  <li><a href="https://game.yuankedev.fun" target="_blank" rel="noopener noreferrer">Webpage Games</a></li>
                  <li><a href="https://playground.yuankedev.fun" target="_blank" rel="noopener noreferrer">CSS Playground</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
