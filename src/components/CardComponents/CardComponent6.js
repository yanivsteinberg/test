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

export default function CardComponent6() {
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
        title="Mushroom Soup"
        subheader="September 14, 2016"
      />
      <CardActionArea>
        <Link to={"/recipeview6"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="194"
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mushroom_soup-9b55c55.jpg"
            alt="Mushroom Soup"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Make the most of mushrooms with this comforting mushroom soup
              recipe made with cream, onions and garlic. Serve for lunch or as a
              starter with crusty bread.
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
          <Typography paragraph>90g butter</Typography>
          <Typography paragraph>2 medium onions, roughly chopped</Typography>
          <Typography paragraph>1 garlic clove, crushed</Typography>
          <Typography paragraph>
            500g mushrooms, finely chopped (chestnut or button mushrooms work
            well)
          </Typography>
          <Typography paragraph>2 tbsp plain flour</Typography>
          <Typography paragraph>1L chicken stock</Typography>
          <Typography paragraph>1 bay leaf</Typography>
          <Typography paragraph>4 tbsp heavy flour</Typography>
          <Typography paragraph>
            small handful flat-leaf parsley, roughly chopped, to serve
            (optional)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
