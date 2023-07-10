import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container
      id="contact"
      sx={{ backgroundColor: "secondary.dark" }}
      maxWidth="false"
    >
      <Box textAlign="center" mt={12} pt={12} pb={12} color="white">
        <Typography variant="h2" fontWeight={700} mb={4}>
          Get in touch
        </Typography>
        <Typography variant="h5" gutterBottom mb={4}>
          yuankemiao.dev@gmail.com
        </Typography>
        <Typography variant="body" >
          I'm currently looking for a full-time job. <br />
          If you have any questions or want to work with me, <br />
          please feel free to contact me.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
