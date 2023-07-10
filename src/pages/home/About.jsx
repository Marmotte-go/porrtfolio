import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Sloth from "../../img/sloth.png";
import { Typography } from "@mui/material";

const about = () => {
  return (
    <Container
      id="about"
      sx={{ backgroundColor: "primary.dark" }}
      maxWidth="false"
    >
      <Grid container spacing={2} pl={8} pr={8} mt={12} mb={12}>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
        >
          <Typography variant="h2" color="white" fontWeight={700} mb={8}>
            About Me
          </Typography>
          <Typography variant="body" color="white" sx={{lineHeight: 2}}>
            Hi, I am Yuanke, a new front end developer based in Jyväskylä, Finland.
            <br />
            I use <Typography component="span" fontWeight="700" color="lightyellow" >React, firebase, Material-UI</Typography> and other tools to build websites. <br />
            I love <Typography component="span" fontWeight="700" color="lightyellow" >technology</Typography>, and I am always eager to learn new things. <br />
            I love cute <Typography component="span" fontWeight="700" color="lightyellow" >Amigurumi</Typography> (crochet stuffed animals). <br />
            I love Lego, I will show you my <Typography component="span" fontWeight="700" color="lightyellow" >Lego</Typography> collection if you ask me. <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <img src={Sloth} alt="" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default about;
