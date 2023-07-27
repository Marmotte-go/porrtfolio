import { useState, useEffect } from "react";
import {
  fullstackApps,
  webpageGames,
  handyTools,
  cssPlayground,
} from "./workData";

import placeholder from "../../img/placeholder.jpg";

import "./Works.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const list = [
  { name: "Fullstack Apps", id: "fullstack-apps" },
  { name: "Webpage Games", id: "webpage-games" },
  { name: "Handy Tools", id: "handy-tools" },
  { name: "CSS Playground", id: "css-playground" },
];

const Works = () => {
  const {theme} = useContext(ThemeContext);
  const [selected, setSelected] = useState("fullstack-apps");
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "fullstack-apps":
        setData(fullstackApps);
        break;
      case "webpage-games":
        setData(webpageGames);
        break;
      case "handy-tools":
        setData(handyTools);
        break;
      case "css-playground":
        setData(cssPlayground);
        break;
      default:
        setData(fullstackApps);
    }
  }, [selected]);

  return (
    <div id="works" className={`workpage ${theme === 'light' ? 'light' : ''}`}>
      <div className="header">
        <h2>Works</h2>
        <p>
          Life is too short to be serious. <br />
          I enjoy making fun stuff. <br />
          Here are some of my works.
        </p>
      </div>
      <div className="container">
        <ul>
          {list.map((item) => (
            <li
              key={item.id}
              className={selected === item.id ? "list active" : "list"}
              onClick={() => {
                setSelected(item.id);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="works">
          {data.map((item) => (
            <a className="work" key={item.id} href={item.published}>
              <img src={item.image ? item.image : placeholder} alt="" />
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
