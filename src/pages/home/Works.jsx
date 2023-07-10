import React from "react";
import WorkCard from "./WorkCard";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import sudoku from "../../img/sudoku.png";
import chat from "../../img/chat.png";
import blog from "../../img/blog.png";

const works = [
  {
    title: "Sudoku",
    id: 1,
    description:
      "Sudoku is my favorite brain game. I enjoy the time solving it, so I made a pure sudoku game for myself and for you. I don't own the algorithm, it is made by Pete Williams, thanks him! I am still working on it, to add more advanced features. This webpage game is made by React.js and CSS.",
    github: "https://github.com/Marmotte-go/small-apps/tree/Sudoku",
    image: sudoku,
    published: "https://sudoku.yuankedev.fun",
  },
  {
    title: "Blog",
    id: 2,
    description:
      "This is a simple blog website. I made it because I love the blog era, when there is no social media, people write blogs to share their life. I want to bring it back. I am still working on it, to add more features. This blog is made by React.js and firebase, powerd by Material-UI.",
    github: "https://github.com/Marmotte-go/small-apps/tree/blog",
    image: blog,
    published: "https://blog.yuankedev.fun",
  },
  {
    title: "M.Chat",
    id: 3,
    description:
      "This is a chat app I made for my Chinese friends. So they can speak freely without censorship. Sorry I can not show you yet, because it is in private beta. But you can check the code on my github. (I didn't finnish the contact page yet, so it is like a retro online chatroom now.)",
    github: "https://github.com/Marmotte-go/small-apps/tree/mchat",
    image: chat,
    published: false,
  },
];

const Works = () => {
  return (
    <Container id="works">
      <Stack
        direction="column"
        spacing={4}
        justifyContent="center"
        mt={12}
        mb={12}
        pl={8}
        pr={8}
      >
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" color="secondary" fontWeight={700} mb={4}>
            Works
          </Typography>
          <Typography variant="body" >
            Life is too short to be serious. <br />
            I enjoy making fun stuff. <br />
            Here are some of my works.
          </Typography>
        </Box>

        <Stack direction="column" spacing={4}>
          {works.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              description={work.description}
              github={work.github}
              published={work.published}
              image={work.image}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Works;
