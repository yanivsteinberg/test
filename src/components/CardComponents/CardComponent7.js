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

export default function CardComponent7() {
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
        title="Japanese Cotton Cheesecake"
        subheader="September 14, 2016"
      />
      <CardActionArea>
        <Link to={"/recipeview7"} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="194"
            image="data:image/jpeg;base64,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"
            alt="Japanese Cotton Cheesecake"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Japanese Cotton Cheeasecake is combination of spongecake and
              cheesecake in both taste and texture.
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
          <Typography paragraph>
            Ingredients(This recipe is for 2 oval molds size 21x10x5.5cm):
          </Typography>
          <Typography paragraph>
            125g creamcheese(soften in room temperature)
          </Typography>
          <Typography paragraph>67g whipping cream</Typography>
          <Typography paragraph>67g milk</Typography>
          <Typography paragraph>40g pastry flour/cake flour</Typography>
          <Typography paragraph>13g corn flour</Typography>
          <Typography paragraph>4 eggs(60g/each including shell)</Typography>
          <Typography paragraph>1/2tsp vanilla extract</Typography>
          <Typography paragraph>67g sugar</Typography>
          <Typography paragraph>
            1/4tsp cream of tartar and a pinch of salt
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
