import * as React from "react";
import { useState } from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import placeholder from "../../img/placeholder.jpg";
import { Grid } from "@mui/material";

export default function WorkCard(props) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card sx={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)", border: "none" }}>
      <Grid container spacing={2} direction={{ xs: "column", md: "row" }}>
        <Grid item xs={2} md={3} onClick={toggleDescription}>
          <CardMedia
            component="img"
            sx={{
              width: {md: '100%'},
              height: {xs:100, md: '100%'},
            }}
            image={props.image ? props.image : placeholder}
            title={props.title}
          />
        </Grid>

        <Grid
          item
          xs={10}
          md={9}
          onClick={toggleDescription}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <CardContent sx={{ maxHeight: 150 }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" component="a" href={props.github}>
              Github
            </Button>
            {props.published && <Button size="small" component="a" href={props.published}>View</Button>}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
