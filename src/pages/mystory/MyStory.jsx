import React from "react";
import "./MyStory.scss";
import { useState } from "react";

import Navbar from "../../components/Navbar";

const options = [
  {
    id: 1,
    description:
      "You are in the last year of high school, You love drawing, and you doodle everywhere. You also have a deep passion for physics, mathematics, spaceships, and video games, which has earned you the nickname nerd among your classmates. Now, you have two options for your bachelor’s degree: art or astronomy?",
    blue: "Art",
    blueURL:
      "https://firebasestorage.googleapis.com/v0/b/marmottechat-f0b11.appspot.com/o/my_works%2Fmystory%2Fjene-stephaniuk--MCrF6hnojU-unsplash.jpg?alt=media&token=097df60c-79a3-4da0-b66b-f640911d6001",
    red: "Astronomy",
    redURL:
      "https://firebasestorage.googleapis.com/v0/b/marmottechat-f0b11.appspot.com/o/my_works%2Fmystory%2Fbrano-K2MsWQc0M0k-unsplash.jpg?alt=media&token=76310daf-a2ce-4dab-9a5e-b0b433b33a0f",
    ending:
      "Congratulations! You are a hard-working artist, creating amazing art! Whether you end up rich or not, we hope you enjoy your life!",
  },
  {
    id: 2,
    description:
      "You are in the last year of university, After your internship, you are not sure if you like the lifestyle of a junior astronomer, but your love for astronomy persists. You now have two Master’s degree offers. Which one do you choose: Celestial Mechanics or History of Astronomy?",
    blue: "Celestial Mechanics",
    red: "History of Astronomy",
    ending:
      "Congratulations! You're a dedicated astronomer, conducting fascinating research. Sure, it might be average or even a bit boring at times, but your love for science and the stars still burns as brightly as when you were five years old.",
  },
];

const MyStory = () => {
  const [storyEnd, setStoryEnd] = useState(false);
  const resetGame = () => {
    setStoryEnd(false);
  }

  return (
    <div className="mystory">
      <Navbar />
      <div className="mystory_container">
        <h1 className="title">
          <span className="red">RED PILL</span> or{" "}
          <span className="blue">BLUE PILL</span>?
        </h1>
        {storyEnd ? (
          <div className="ending">
            <p>{options[0].ending}</p>
            <button onClick={resetGame}>Replay</button>
          </div>
        ) : (
          <div className="options_container">
            <div className="descriptions">
              <p className="question">{options[0].description}</p>
            </div>
            <div className="options">
              <div className="blue option" onClick={()=>setStoryEnd(true)}>
                <img src={options[0].blueURL} alt="" />
                <button className="blue">{options[0].blue}</button>
              </div>
              <div className="red option">
                <img src={options[0].redURL} alt="" />
                <button className="red">{options[0].red}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyStory;
