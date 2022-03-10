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

export default function CardComponent5() {
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
        title="Bibimbap"
        subheader="September 14, 2016"
      />
      <CardActionArea>
        <Link to={"/recipeview5"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="194"
            image="https://mykoreankitchen.com/wp-content/uploads/2013/07/1.Korean-mixed-rice-Bibimbap.webp"
            alt="Bibimbap"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Bibimbap is probably one of the most well-known and beloved Korean
              dishes to many people. It is very easy to make and can be made
              flexibly depends on what ingredients you have. For the sauce, you
              can have classic gochujang, soy sauce, doejang and meaty
              gochujang. This recipe will use classic gochujang bibimbap sauce.
              If you want non-spicy/ kid friendly sauce, check soy sauce
              bibimbap sauce.
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
          <Typography paragraph>Classic Gochujang Sauce:</Typography>
          <Typography paragraph>
            _ 1/2cup Gochujang(Korean chili paste)
          </Typography>
          <Typography paragraph>_ 1/4cup toasted sesame oil</Typography>
          <Typography paragraph>_ 1/4cup sugar</Typography>
          <Typography paragraph>_ 1/4cup water</Typography>
          <Typography paragraph>_ 1/4 cup toasted sesame seeds</Typography>
          <Typography paragraph>
            _ 4tsp vinegar,apple cider vinegar or rice vinegar
          </Typography>
          <Typography paragraph>_ 4tsp minced garlic</Typography>
          <Typography paragraph>Kid Friendly Soy Sauce:</Typography>
          <Typography paragraph>_ 1/2cup soy sauce</Typography>
          <Typography paragraph>_ 2tsp toasted sesame oil</Typography>
          <Typography paragraph>_ 4tsp sugar</Typography>
          <Typography paragraph>_ 4tsp toasted sesame seeds</Typography>
          <Typography paragraph>_ 1tsp minced garlic</Typography>
          <Typography paragraph>Meat and meat sauce:</Typography>
          <Typography paragraph>_ 100g minced beef</Typography>
          <Typography paragraph>_ 1Tbsp soy sauce</Typography>
          <Typography paragraph>_ 1Tbsp sesame oil</Typography>
          <Typography paragraph>_ 1 tsp sugar</Typography>
          <Typography paragraph>_ 1/4tsp miced garlic</Typography>
          <Typography paragraph>Vegetables and others:</Typography>
          <Typography paragraph>
            _ 100g mushroom(shiitake, king trumpet, white button,etc. Just
            choose your favorite.)
          </Typography>
          <Typography paragraph>_ 120g(1 small) carrot</Typography>
          <Typography paragraph>_ 350g bean sprouts</Typography>
          <Typography paragraph>_ 250g spinach</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
