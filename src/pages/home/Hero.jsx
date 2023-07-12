import Typewriter from "typewriter-effect";
import marmot from "../../img/marmot-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import ShootingStar from "../../components/ShootingStar";

import "./Hero.scss";

const Hero = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div id="hero">
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
    </div>
  );
};

export default Hero;
