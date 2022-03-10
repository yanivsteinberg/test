import * as React from "react";
import { Stack } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

class RecipeView3 extends React.Component {
  render() {
    return (
      <div>
        <Stack>
          <CardHeader title="Caramel Flan" subheader="September 14, 2016" />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Caramel Flan"
            style={{ paddingLeft: 13 }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Combination of Flan's smooth softness and creamy rich flavor with
              sweetness of caramel that has a hint of bitterness makes Caramel
              Flan a pretty popular dessert. It is quite simple to make this
              dessert. You can steam or bake in the oven with water bath.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <Typography paragraph>For Caramel:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="70g sugar"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="cold water"
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="5ml lime juice"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>For Flan:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="3 eggs"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="2 egg yolks(18-20g/yolk)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="70g sugar"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="400ml milk"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="150ml heavy cream"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="5ml vanila extract(optional)"
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="pinch of salt"
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
                label="Prepare 8 - 10 ramekins."
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="In a sauce pan, cook sugar and water over medium-low heat until melted and golden. 
                Then take it off the stove and quickly pour in lime juice and stir. Devide the caramel to ramekins and let it stand till harden.
                If the caramel got harden while deviding into ramekins, you can put the sauce pan back to the stove and reheat till it melted again."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="                In a bowl, combine 3 eggs, 2 egg yolks and sugar; then whisk gentle in one direction.
                In a sauce pan, pour in milk and heavy cream. Cook and whisk the mixture until heated(not boiling) then remove it from the stove.
                Slowly pour the cream-milk mixture into sugar-egg bowl while whisking gently to combine both mixture.
                Pour the final mixture through sifter, then combine with a pinch of salt and vanila extract.
                Devide the mixture into ramekins."
                labelPlacement="end"
              />
            </Typography>

            <Typography paragraph>Baking in oven:</Typography>

            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Preheat the oven 160 C for 10 minutes. Prepare baking tray with high sides.
                Put the ramekins into baking tray. Pour water into the tray till half height.
                Put the tray to the oven and bake till Flan is ready. It depends on the volume of Flan mixture in the ramekins
                that the baking time is from 40 to 50 minutes. 
                To test if flan is ready, insert a toothpick in the middle of the flan then pull up. 
                If the toothpick is clean, flan is ready. "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>Steam on the stove:</Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Boil water till boiling in a sauce pan, then lower the heat to medium-low heat. 
                Put stovetop steamer on top of the saucepan, then place Flan inside and close the lid. 
                Steam for 45 to 55 minutes.  Test if Flan is ready like above. "
                labelPlacement="end"
              />
            </Typography>
            <Typography paragraph>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Let Flan cooldown then put them in refrigerator for at least 2 to 3 hours for the caramel to melt(recommend overnight). 
                To serve, use sharp knife and go around the ramekins' sides then flip it to a dish and enjoy. "
                labelPlacement="end"
              />
            </Typography>
          </CardContent>
        </Stack>
      </div>
    );
  }
}

export default RecipeView3;
