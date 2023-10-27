import { useContext, useEffect, useState } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import CopyButton from "../../components/CopyButton";

import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  
  const [leftRotation, setLeftRotation] = useState(0);
  const [rightRotation, setRightRotation] = useState(-90);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    let radLeft = Math.atan2(innerHeight - clientY, clientX);
    let radRight = Math.atan2(innerHeight - clientY, innerWidth - clientX);
    let leftRotation = radLeft * (180 / Math.PI) * -1 + 45;
    let rightRotation = radRight * (180 / Math.PI) + 225;

    setLeftRotation(leftRotation);
    setRightRotation(rightRotation);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`contact ${theme === 'light' ? 'light' : ''}`}id="contact">
      <div className="container">
        <h1>Get in touch</h1>
        <span>
          <a href="mailto: yuankemiao.dev@gmail.com" title="Click to send me a email!">yuankemiao.dev@gmail.com</a>
          <CopyButton email="yuankemiao.dev@gmail.com" />
        </span>
        <p>
          {" "}
          I'm currently looking for a full-time job. <br />
          If you have any questions or want to work with me, <br />
          please feel free to contact me.
        </p>
      </div>
      <div className="satelite-container">
        <div
          className="satelite satelite1"
          style={{ transform: `rotate(${leftRotation}deg)` }}
        >
          <FontAwesomeIcon icon={faSatelliteDish} />
        </div>
        <div
          className="satelite satelite2"
          style={{ transform: `rotate(${rightRotation}deg)` }}
        >
          <FontAwesomeIcon icon={faSatelliteDish} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
