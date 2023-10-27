import { db } from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";

const construction =
  "https://firebasestorage.googleapis.com/v0/b/marmottechat-f0b11.appspot.com/o/my_works%2Fconstruction.png?alt=media&token=1154e48a-5eee-4247-96e3-9e1b2fb305e0";

export const fullstackApps = [
  {
    title: "Blog",
    id: 1,
    description:
      "This is a simple but functional blog website. It is made with React and Firebase. Thanks Google for providing such a great backend service.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/marmottechat-f0b11.appspot.com/o/my_works%2Fblog.png?alt=media&token=629e1da0-f918-4d19-964b-b0fb0316984c",
    published: "https://blog.yuankedev.fun",
    catagory: "fullstack-apps",
  },
  {
    title: "AI Chatbot",
    id: 2,
    description:
      "This is a openai powered chatbot. Tbh, I didn't do much, just a simple frontend and Google cloud functions. The AI is doing all the work. ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/marmottechat-f0b11.appspot.com/o/my_works%2Fchatbot.png?alt=media&token=7b380209-fdf5-479a-9a24-99dd4d4b5c03",
    published: "https://ai.yuankedev.fun/chatbot",
    catagory: "fullstack-apps",
  },
  {
    title: "AI Language Assistant",
    id: 3,
    description:
      "You input a Finnish sentence, and the AI will explain all linguistic knowledge of each word and the whole sentence. It is quite handy for Finnish learners, I use it everyday. ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/marmottechat-f0b11.appspot.com/o/my_works%2FlanguageAssistant.png?alt=media&token=d392f425-1f12-4582-9839-95094ed7ca7b",
    published: "https://ai.yuankedev.fun/language_assistant",
    catagory: "fullstack-apps",
  },
];

export const webpageGames = [
  {
    title: "Sudoku",
    id: 1,
    description:
      "Sudoku is my favorite brain game. I enjoy the time solving it, so I made a pure sudoku game for myself and for you. ",
    image:
      "https://firebasestorage.googleapis.com/v0/b/marmottechat-f0b11.appspot.com/o/my_works%2Fsudoku.png?alt=media&token=89873ec0-6e90-4cd7-8279-e95b1065a37a",
    published: "https://game.yuankedev.fun/sudoku",
    catagory: "webpage-games",
  },
  {
    title: "minesweeper",
    id: 2,
    description:
      "Minesweeper is my favorite classic game, it brings me to my childhood. ",
    image: construction,
    published: null,
    catagory: "webpage-games",
  },
];

export const cssPlayground = [
  {
    title: "Loading Animations",
    id: 1,
    description: "I love loading animations, they are so fun to watch. ",
    image: construction,
    published: null,
    catagory: "css-playground",
  },
  {
    title: "CSS Art",
    id: 2,
    description: "I love CSS art, they are so fun to make. ",
    image: construction,
    published: null,
    catagory: "css-playground",
  },
  {
    title: "Full screen clock",
    id: 3,
    description: "Time to buy a watch. ",
    image: construction,
    published: null,
    catagory: "css-playground",
  },
];

//upload them to my firebase database
// const uploadToFirebase = async () => {

//   const works = [...fullstackApps, ...webpageGames, ...cssPlayground];
//   for (let i = 0; i < works.length; i++) {
//     await setDoc(doc(db, "my_works", `${i}`), {
//       name: works[i].title,
//       description: works[i].description,
//       image: works[i].image,
//       url: works[i].published,
//       category: works[i].catagory,
//     });
//   }
// };

//  uploadToFirebase();
