import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function StartersComponent() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Starters"
        subheader="Starter dishes and appetizers"
      />
      <CardActionArea>
        <Link to={"/starters"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Starters"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Starters consist of a wide variety of hot or cold dishes served
              before the main course of a meal.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
