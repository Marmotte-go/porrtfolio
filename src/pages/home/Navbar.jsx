import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar position="static" color="primary" id="navbar">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            component="a"
            href="/"
            sx={{
              textDecoration: "none",
            }}
          >
            YUANKE
          </Typography>
          <Box ml="auto">
            <Button color="inherit" onClick={() => handleScroll('home')}>
                Home
            </Button>
            <Button color="inherit"  onClick={() => handleScroll('about')} >
              About
            </Button>
            <Button color="inherit" onClick={() => handleScroll('works')}>
              Works
            </Button>
            <Button color="inherit"  onClick={() => handleScroll('contact')}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
