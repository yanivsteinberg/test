import * as React from "react";
import { Grid } from "@mui/material";
import CardComponent from "../components/CardComponents/CardComponent";
import CardComponent2 from "../components/CardComponents/CardComponent2";
import CardComponent3 from "../components/CardComponents/CardComponent3";
import CardComponent4 from "../components/CardComponents/CardComponent4";

class RecipeGridView extends React.Component {
  render() {
    return (
      <>
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <CardComponent />
            </Grid>
            <Grid item xs={6}>
              <CardComponent2 />
            </Grid>
            <Grid item xs={6}>
              <CardComponent3 />
            </Grid>
            <Grid item xs={6}>
              <CardComponent4 />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default RecipeGridView;
