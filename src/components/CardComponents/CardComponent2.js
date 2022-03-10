import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        title="Shrimp Tempura"
        subheader="September 14, 2016"
      />
      <CardActionArea>
        <Link to={"/recipeview2"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="194"
            image="https://www.justonecookbook.com/wp-content/uploads/2020/03/Shrimp-Tempura-3130-II.jpg"
            alt="Shrimp Tempura"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Shrimp tempura can be enjoyed as a stand-alone dish for starter or
              can be served over a rice bowl or noodle soup as main dish.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>10 black tiger prawns</Typography>
          <Typography paragraph>
            potato starch or corn starch (for dusting)
          </Typography>
          <Typography paragraph>
            3 cups neutral-flavored oil (for deep-frying)
          </Typography>
          <Typography>
            For the Tempura Batter (ratio of egg+water to flour is 1 to 1 by
            volume: 1 large egg (50g w/o shell) (cold); 3/4 cup +4 tsp iced
            water; 1 cup all-purpose flour.
          </Typography>
          <Typography>
            For Tempura Sauce( Tentsuyu): 3/4 cup dashi stock(or use 3/4 cup
            water + 1 tsp dashi powder); 3 Tbsp soy sauce; 2 Tbps mirin; 2 tsp
            sugar.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
