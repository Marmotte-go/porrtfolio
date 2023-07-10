import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"noCopyright © "}
      <Link color="inherit" href="https://yuankedev.fun">
        yuankedev.fun
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mb: 0,
          mt: 'auto',
          backgroundColor: "primary.light",
        }}
      >
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="body1">
            Hope you enjoy this website, and have a nice day!
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}
