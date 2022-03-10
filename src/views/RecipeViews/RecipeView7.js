import * as React from "react";
import { Stack } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

class RecipeView7 extends React.Component {
  render() {
    return (
      <div>
        <Stack>
          <CardHeader
            title="Japanese Cotton Cheesecake"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Japanese Cotton Cheesecake"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Japanese Cotton Cheeasecake is combination of spongecake and
              cheesecake in both taste and texture.
            </Typography>
          </CardContent>

          <CardContent>
            <Typography paragraph>
              Ingredients(This recipe is for 2 oval molds size 21x10x5.5cm):
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="125g creamcheese(soften in room temperature)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="67g whipping cream"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="67g milk"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="40g pastry flour/cake flour"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="13g corn flour"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="4 eggs(60g/each including shell)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/2tsp vanilla extract"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="67g sugar"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="1/4tsp cream of tartar and a pinch of salt"
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
                label="Note: If you don't have cake flour, substitude with 35g all-purpose flour and 5g corn flour.
                However, cake flour will make the cake taste better.
                We reccomend using non-detachable mold for this recipe because of baking in oven with water bath.
                If you use detachable mold, wrap 2 - 3 aluminium foil layers carefully at the bottom of the mold. "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Preheat the oven at 140 C. Put baking paper into the mold. Boil water for water bath."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Seperate egg white and egg yolks into two seperate clean bowls.
                In another bowl, mix cake flour and corn flour and sift thoroughly."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" Use spatula to smoothen cream cheese in a bowl. Pour in heavy cream and milk. 
                Place the bowl on top of soft boiling water saucepan on medium-low heat. Whisk until the mixture is smooth and warm then take the bowl off.
                Immediately pour the flour mixture into the bowl, whisk until combine then quickly put all egg yolks and vanilla extract in.
                Whisk again until everything is smooth.  "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" In another bowl, add a pinch of salt to the egg whites, beat on medium speed until large air bubbles appear, then add the cream of tartar. 
                Continue to beat until the air bubbles become smaller like soap bubbles, gradually add 67 grams of sugar, after the sugar is gone, increase the machine speed to the highest. 
                Beat until the whites are almost stiff, pull the beater up to see a tip, but when it turns slightly down, stop.  "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" Take ⅓ of the beaten whites into the yolk mixture, 
                gently mix with a whisk until the whites are combined, and the yolk mixture is looser.
                Divide the remaining whites into 2 parts, fold into the flour mixture one at a time using the folding technique until just combined, then stop.
                Remember to mix well at the bottom of the bowl to prevent the flour from settling on the bottom, when baking this part will sink, making the cake sticky. "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" Take ⅓ of the beaten whites into the yolk mixture, 
                gently mix with a whisk until the whites are combined, and the yolk mixture is looser.
                Divide the remaining whites into 2 parts, fold into the flour mixture one at a time using the folding technique until just combined, then stop.
                Remember to mix well at the bottom of the bowl to prevent the flour from settling on the bottom, when baking this part will sink, making the cake sticky. "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" Pour the mixture into 2 oval molds, gently drop the molds on the table about 2-3 times for large air bubbles to break. "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" Place the baking rack so that the cake is in the middle of the oven, with this high cake, it should be baked on the last or near the last rack.
                Put the baking tray in the oven, place the cake pan on the tray, then pour boiling water so that the water covers at least ¼ of the mold.
                Bake at 135 – 140 degrees C for 100 – 120 minutes, until the surface of the cake turns golden brown, gently press the cake surface to see the cake puff again. 
                Observe the surface of the cake, if the surface of the cake is not dry, the yellow color is not dark, increase the heat to 165 degrees Celsius and bake for another 5-10 minutes until the surface is golden brown and dry."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label=" After baking is complete, turn off the oven.
                Open the oven door slightly, or block a towel/chopstick against the oven door so that it is only 2-3cm open, 
                leave the cake in the oven for about 10 minutes for the cake to cool down slowly before taking it out.
                After taking the cake out of the oven, at this time, the cake has shrunk and separated from the wall of the mold, 
                turn the mold upside down on a plate to remove the cake, remove the lining paper. 
                Then turn the cake upside down on the rack to keep the cake surface smooth. Let the cake cool completely. 
                The cake when hot, if lightly tapped the cake will jiggly flutter a bit, but when it cools, the cake will harden."
                labelPlacement="end"
              />
            </Typography>
          </CardContent>
        </Stack>
      </div>
    );
  }
}

export default RecipeView7;
