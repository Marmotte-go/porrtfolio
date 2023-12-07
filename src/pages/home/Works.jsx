import { useState, useEffect } from "react";
import { db } from "../../firebase";

import placeholder from "../../img/placeholder.jpg";

import "./Works.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { collection, getDocs, query} from "firebase/firestore";

const list = [
  { name: "Fullstack Apps", id: "fullstack-apps" },
  { name: "Webpage Games", id: "webpage-games" },
  { name: "CSS Playground", id: "css-playground" },
];

const Works = () => {
  const { theme } = useContext(ThemeContext);
  const [selected, setSelected] = useState("fullstack-apps");
  const [data, setData] = useState([]);

  const [works, setWorks] = useState(null);

  useEffect(() => {
    const getWorks = async () => {
      try {
        const q = query(collection(db, "my_works"));
        const querySnapshot = await getDocs(q);
        const temp = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWorks({
          fullstackApps: temp.filter((item) => item.category === "fullstack-apps"),
          webpageGames: temp.filter((item) => item.category === "webpage-games"),
          cssPlayground: temp.filter((item) => item.category === "css-playground"),
        });
      } catch (error) {
        console.log(error);
      }
    };
    getWorks();
  }, []);


  useEffect(() => {
    if(!works) return;
    switch (selected) {
      case "fullstack-apps":
        setData(works.fullstackApps);
        break;
      case "webpage-games":
        setData(works.webpageGames);
        break;
      case "css-playground":
        setData(works.cssPlayground);
        break;
      default:
        setData(works.fullstackApps);
        break;
    }
  }, [selected, works]);

  return (
    <div id="works" className={`workpage ${theme === "light" ? "light" : ""}`}>
      <div className="header-skills">
        <div className="header">
        <h2>Works</h2>
        <p>
          Life is too short to be serious. <br />
          I enjoy making fun stuff. <br />
          Here are some of my works.
        </p>
        </div>
        <div className="skills">
          <div className="good">
            <h3>Good at</h3>
            <p>
              React | JavaScript | TypeScript | HTML | CSS/SCSS | Node.js | Express.js | Firebase | Git/GitHub |
            </p>
          </div>
          <div className="learning">
            <h3>Learning</h3>
            <p>
              Next.js | AWS | Tailwind CSS
            </p>
          </div>
        </div>
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
            <a
              className="work"
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image ? item.image : placeholder} alt="" />
              <div className="info">
                <h3>{item.name}</h3>
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
