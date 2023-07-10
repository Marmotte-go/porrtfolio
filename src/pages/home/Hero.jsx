import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typewriter from "typewriter-effect";
import marmot from "../../img/marmot-1.png";

const Hero = () => {
  return (
    <Container id="hero">
      <Grid container spacing={2} mt={12} mb={12} pl={8} pr={8}>
        <Grid item xs={12} md={6} display="flex"
            justifyContent="center">
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: "primary.light",
              borderRadius: "50%",
            }}
            display="flex"
            justifyContent="center"
          >
            <Tooltip title="Powered by DALL·E" placement="top">
              <img src={marmot} alt="marmot" />
            </Tooltip>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display={"flex"}
          justifyContent="start"
          alignItems="center"
        >
          <Stack textAlign="left" direction="column" spacing={4}>
            <Typography variant="h2">
              Hi, <br />
              I'm Yuanke
            </Typography>
            <Typography variant="h3" color="secondary" fontWeight={700}>
              <Typewriter
                options={{
                  strings: [
                    "Full-stack developer",
                    "Wool lover",
                    "Lifelong learner",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="#contact"
              size="large"
              sx={{ width: "150px" }}
            >
              Contact Me
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
