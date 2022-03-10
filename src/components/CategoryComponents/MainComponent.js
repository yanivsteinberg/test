import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainComponent() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mains"
        subheader="September 14, 2016"
      />
      <CardActionArea>
        <Link to={"/recipeview1"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              A main course is the featured or primary dish in a meal consisting
              of several courses. It usually follows the entrée course.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
