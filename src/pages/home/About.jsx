import "./About.scss";
import Sloth from "../../img/sloth.png";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="container-left">
          <h2>About Me</h2>
          <p>Hi, I am Yuanke.</p>
          <p>A frontend developer in Jyväskylä, Finland.</p>
          <p>
            I use <span>React, firebase</span> and other tools to build
            websites.
          </p>
          <p>
            I love <span>technology</span>, and I am always eager to learn new
            things.
          </p>
          <p>
            I love cute <span>Amigurumi</span> (crochet stuffed animals).
          </p>
          <p>
            I love Lego, I will show you my <span>Lego</span> collection if you
            ask me.
          </p>
          <p><a href="/">Know more ...</a></p>
        </div>
        <div className="container-right">
          <div className="img-box">
            <img src={Sloth} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
