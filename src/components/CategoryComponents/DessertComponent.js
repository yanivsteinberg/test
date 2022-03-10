import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function DessertComponent() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Desserts"
        subheader="Sweet foods and pastries"
      />
      <CardActionArea>
        <Link to={"/desserts"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Dessers"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Dessert is a course that concludes a meal. The course consists of
              sweet foods, such as confections, and possibly a beverage such as
              dessert wine and liqueur.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
