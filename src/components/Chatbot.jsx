import "./Chatbot.scss";
import Draggable from "react-draggable";
import { SendIcon } from "./Icons";
import { useState, useEffect, useRef, createRef, useContext, memo } from "react";

import Loading from "./Loading";
import { ThemeContext } from "../context/ThemeContext";

import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

const generateResponse = httpsCallable(functions, "chatbot");

const botResponse = async (message) => {
  return generateResponse({ input: message }).then((response) => {
    return {
      role: "assistant",
      content: response.data.result,
    };
  });
};

//For testing purposes
// const mockBotResponse = (message) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const response = {
//         role: "assistant",
//         content: "This is a mock response.",
//       };
//       resolve(response);
//     }, 1000);
//   });
// };

const Chatbot = memo (function Chatbot() {
  const { theme } = useContext(ThemeContext);

  const [activeChatbot, setActiveChatbot] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const ref = useRef(null); // Create a reference to be able to check if an element is clicked outside
  const [chatRefs, setChatRefs] = useState([]);

  const initialChats = [
    { role: "assistant", content: "Are you bored? Try talk to me!" },
  ];

  const [input, setInput] = useState("");
  const [chats, setChats] = useState(initialChats);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setChatRefs((refs) =>
      Array(chats.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [chats]);

  useEffect(() => {
    if (chatRefs.length > 0) {
      chatRefs[chatRefs.length - 1].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [chatRefs]);

  const handleSend = () => {
    if (input) {
      const newChat = { role: "user", content: input };
      let updatedChats = [...chats, newChat];
      setChats(updatedChats);

      setIsLoading(true);

      const recentChats =
        updatedChats.length >= 10 ? updatedChats.slice(-10) : updatedChats;

      botResponse(recentChats).then((res) => {
        setIsLoading(false);
        setChats([...updatedChats, res]);
      });
    }
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleHover = () => {
    setActiveChatbot(true);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActiveChatbot(false);
    }
  };

  useEffect(() => {
    // Add event listener to check for clicks outside the Chatbot
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Draggable
      nodeRef={ref}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
      bounds=".home"
    >
      <div
        className={`chatbot ${activeChatbot ? "active" : ""} ${
          isDragging ? "dragging" : ""
        } ${theme === "light" ? "light" : ""}`}
        ref={ref}
        id="chatbot"
        onMouseEnter={handleHover}
      >
        <div className="chatbot-container">
          <div className="chats">
            {chats.map((chat, index) => (
              <div
                className={`chat ${chat.role === "user" ? "user" : ""}`}
                key={index}
                ref={chatRefs[index]}
              >
                <div className="content">
                  <span>{chat.role === "user" ? "User" : "Bot"}</span>
                  <p>{chat.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat loading">
                <div className="content">
                  <span>Bot</span>
                  <p>
                    <Loading />
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="Write something ..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              maxLength={100}
              onKeyDown={handleKey}
            />
            <div className="send" onClick={handleSend}>
              <SendIcon />
            </div>
          </div>
          <div className="tag">
            <span>Click outside to close the chat.</span>
            <span>Drag me anywhere!</span>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
);

export default Chatbot;
