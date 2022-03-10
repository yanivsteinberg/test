import * as React from "react";
import { Stack } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

class RecipeView5 extends React.Component {
  render() {
    return (
      <div>
        <Stack>
          <CardHeader title="Bibimbap" subheader="September 14, 2016" />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
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

          <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <Typography paragraph>Classic Gochujang Sauce:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/2cup Gochujang(Korean chili paste)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/4cup toasted sesame oil"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/4cup sugar"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/4cup water"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/4 cup toasted sesame seeds"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="4tsp vinegar,apple cider vinegar or rice vinegar"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="4tsp minced garlic"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>Kid Friendly Soy Sauce:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/2cup soy sauce"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="2tsp toasted sesame oil"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="4tsp sugar"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="4tsp toasted sesame seeds"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1tsp minced garlic"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>Meat and meat sauce:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="100g minced beef"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1Tbsp soy sauce"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1Tbsp sesame oil"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1 tsp sugar"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/4tsp miced garlic"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>Vegetables and others:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="100g mushroom(shiitake, king trumpet, white button,etc. Just choose your favorite.)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="120g(1 small) carrot"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="350g bean sprouts"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="250g spinach"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="3 to 4 serving portions of steamed rice"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="3 to 4 eggs(depending on portions of serving rice)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Salt, Pepper, Cooking Oil"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Note: You can change your vegetables and their amount accordingly to seasons, availability and your favourite."
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
                label="Mix the beef with the meat sauce. Marinate them for 30 minutes while preparing other ingredients. 
                Add cooking oil into a wok/frying-pan and cook the meat thoroughly on medium-high or high heat."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Mix the ingredients with the bibimbap sauce of your choice into a bowl"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" Cook spinach and bean sprouts in boiling water. Then rinse them in cold water for 1 - 2 minutes. 
                Squeeze the excess water and into mixing bowl, season each of them with 1tsp roasted sesame seeds, 1Tbsp roasted sesame oil, 1/4tsp salt."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Rinse, peel and julienne the carrots. 
                Add some cooking oil and 1/4 tsp of fine sea salt in a wok and cook the carrots on medium high to high heat for 2 to 3 mins."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Clean/rinse the shiitake mushrooms and thinly slice them. 
                Add some cooking oil and 1/4 tsp of fine sea salt in a wok and cook the mushrooms on medium high to high heat until they are all cooked. 
                (It takes 2 to 3 mins.)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Make fried eggs.(Sunny side up is our preference. Make them as you wish)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Put the rice into a bowl and add the meat,
                assorted vegetables, seasoned seaweed, bibimbap sauce, and the egg on top of the rice. Serve."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Mix the ingredients in the bowl and enjoy!"
                labelPlacement="end"
              />
            </Typography>
          </CardContent>
        </Stack>
      </div>
    );
  }
}

export default RecipeView5;
