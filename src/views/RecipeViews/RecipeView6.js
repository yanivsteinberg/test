import * as React from "react";
import { Stack } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

class RecipeView6 extends React.Component {
  render() {
    return (
      <div>
        <Stack>
          <CardHeader title="Mushroom Soup" subheader="September 14, 2016" />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
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

          <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="90g butter"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="2 medium onions, roughly chopped"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1 garlic clove, crushed"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="500g mushrooms, finely chopped (chestnut or button mushrooms work well)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="2 tbsp plain flour"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1L chicken stock"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1 bay leaf"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="4 tbsp heavy flour"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="small handful flat-leaf parsley, roughly chopped, to serve (optional)"
                labelPlacement="end"
              />
            </Typography>
          </CardContent>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Heat the butter in a large saucepan and cook the onions 
                and garlic until soft but not browned, about 8-10 mins."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Add the mushrooms and cook over a high heat for another 3 mins until softened.
                 Sprinkle over the flour and stir to combine.
                 Pour in the chicken stock, bring the mixture to the boil, then add the bay leaf and simmer for another 10 mins."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" Remove and discard the bay leaf, then remove the mushroom mixture from the heat and blitz using a hand blender until smooth. 
                Gently reheat the soup and stir through the cream 
                (or, you could freeze the soup at this stage – simply stir through the cream when heating). 
                Scatter over the parsley, if you like, and serve."
                labelPlacement="end"
              />
            </Typography>
          </CardContent>
        </Stack>
      </div>
    );
  }
}

export default RecipeView6;
