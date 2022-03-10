import * as React from "react";
import { Grid } from "@mui/material";
import StartersComponent from "../components/CategoryComponents/StartersComponent";
import MainComponent from "../components/CategoryComponents/MainComponent";
import DrinksComponent from "../components/CategoryComponents/DrinksComponent";
import DessertComponent from "../components/CategoryComponents/DessertComponent";

class CategoryGridView extends React.Component {
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
              <StartersComponent />
            </Grid>
            <Grid item xs={6}>
              <MainComponent />
            </Grid>
            <Grid item xs={6}>
              <DessertComponent />
            </Grid>
            <Grid item xs={6}>
              <DrinksComponent />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default CategoryGridView;
