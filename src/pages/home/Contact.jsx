import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Contact.scss";
import CopyButton from "../../components/CopyButton";

import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`contact ${theme === 'light' ? 'light' : ''}`} id="contact">
      <div className="container">
        <h1>Get in touch</h1>
        <span>
          <a href="mailto: yuankemiao.dev@gmail.com" title="Click to send me an email!">yuankemiao.dev@gmail.com</a>
          <CopyButton email="yuankemiao.dev@gmail.com" />
        </span>
        <p>
          {" "}
          I'm currently looking for a full-time job. <br />
          If you have any questions or want to work with me, <br />
          please feel free to contact me.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/yuankemiao" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/Marmotte-go" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
