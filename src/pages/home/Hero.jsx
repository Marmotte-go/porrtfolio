import Typewriter from "typewriter-effect";
import marmot from "../../img/marmot-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import ShootingStar from "../../components/ShootingStar";
import RotatingSun from "../../components/RotatingSun";
import "./Hero.scss";


const Hero = () => {
  const {theme} = useContext(ThemeContext);
  const [isHover, setIsHover] = useState(false);
  return (
    <div id="hero" className={`hero ${theme === 'light' ? 'light' : ''}`}>
      <div className="container">
        <div
          className="left-container"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img id="marmot" src={marmot} alt="marmot" />
          <span className={`cloud cloud1 ${isHover ? "hover" : ""}`}>
            <FontAwesomeIcon icon={faCloud} />
          </span>
          <span className={`cloud cloud2 ${isHover ? "hover" : ""}`}>
            <FontAwesomeIcon icon={faCloud} />
          </span>
          <span className={`cloud cloud3 ${isHover ? "hover" : ""}`}>
            <FontAwesomeIcon icon={faCloudMoon} />
          </span>
          <span className='tag' style={{display: `${isHover?"none":"block"}`}}>Hover me!</span>
        </div>
        <div className="right-container">
          <h1>Hi, I'm Yuanke</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full-stack developer",
                  "Wool lover",
                  "Lifelong learner",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h2>
        </div>
      </div>
      <ShootingStar />
      <RotatingSun />
    </div>
  );
};

export default Hero;
