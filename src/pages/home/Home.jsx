import React from "react";

import Navbar from "./Navbar";
import Works from "./Works";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import Sidebar from "./Sidebar";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#navbar"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Home = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />

      <Box container component="main" sx={{ minHeight: "100vh" }}>
        <Sidebar position="left" />
        <Sidebar position="right" />
        <Box>
          <Hero />
          <About />
          <Works />
          <Contact />
        </Box>
      </Box>

      {/* <Footer /> */}

      <ScrollTop {...props} >
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{ right: "70px" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default Home;
