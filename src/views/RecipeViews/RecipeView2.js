import * as React from "react";
import { Stack } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

class RecipeView2 extends React.Component {
  render() {
    return (
      <div>
        <Stack>
          <CardHeader title="Shrimp Tempura" subheader="September 14, 2016" />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Shrimp Tempura"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Shrimp tempura can be enjoyed as a stand-alone dish for starter or
              can be served over a rice bowl or noodle soup as main dish.
            </Typography>
          </CardContent>

          <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="10 black tiger prawns"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="potato starch or corn starch (for dusting)"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="3 cups neutral-flavored oil (for deep-frying)"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="For the Tempura Batter (ratio of egg+water to flour is 1 to 1 by volume:
                   1 large egg (50g w/o shell) (cold);
                  3/4 cup +4 tsp iced water;
                  1 cup all-purpose flour."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="For Tempura Sauce( Tentsuyu): 
                3/4 cup dashi stock(or use 3/4 cup water + 1 tsp dashi powder);
                3 Tbsp soy sauce;
                2 Tbps mirin;
                2 tsp sugar."
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
                label="Combine the dashi, soy sauce, mirin, and sugar in a small saucepan and bring it to a boil.
                 Then lower the heat and let it simmer until the sugar is completely dissolved. 
                 Remove from the heat and set aside."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="In a wok or a medium-sized pot, heat 1½ inches (3 cm) of oil to 340-350ºF (170-180ºC) and maintain the oil temperature at all times.
                 You can check the temperature with your chopsticks or with a thermometer. Dip the tips of your chopsticks in the oil. 
                 When you see small bubbles form around the chopsticks, the oil is ready for deep-frying. "
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="                While the oil is heating up, prepare the tempura batter. First, gather the batter ingredients.
                Next, sift the flour into a large bowl. Add the cold egg and the iced water to a measuring cup or bowl.
                Whisk the egg mixture vigorously and discard the foam on the surface. Slowly pour the egg mixture into the flour. 
                Mix the batter, but do not overmix; it's okay to leave some lumps in the batter. 
                Keep the batter cold at all times (store it in the refrigerator, if needed). 
                Make the batter right before deep-frying to avoid activating the wheat gluten in the flour."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Dust the potato starch (or cornstarch) over the shrimp. This will help the tempura batter adhere to the shrimp.
                Now, it's time to coat the shrimp in the batter and add them to the hot oil. Add a few shrimp pieces to the batter bowl.
                Pick up one piece by the tail, let the excess drip off for a second or two, and very gently place it into the hot oil. 
                Continue battering and adding one piece at a time."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Deep-fry the shrimp until golden brown, about 2 minutes. 
                Do not overcrowd the wok or pot; remember, your ingredients should take up no more than about half of the oil surface area at any one time.
                If you add too much food at once, the temperature of the oil will drop quickly and your food will end up absorbing too much oil. 
                Don't overcook the shrimp; otherwise, the texture will be tough and dry. 
                Transfer the shrimp to a wire rack or a plate lined with a paper towel to drain the excess oil. 
                Between batches, skim and discard the crumbs in the oil, which will burn and turn the oil darker if left."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Serve the shrimp tempura with warm tempura dipping sauce and your favorite vegetebles on the side."
                labelPlacement="end"
              />
            </Typography>
          </CardContent>
        </Stack>
      </div>
    );
  }
}

export default RecipeView2;
