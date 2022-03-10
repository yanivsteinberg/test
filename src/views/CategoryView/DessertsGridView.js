import * as React from "react";
import { Grid } from "@mui/material";
import CardComponent3 from "../../components/CardComponents/CardComponent3";
import CardComponent7 from "../../components/CardComponents/CardComponent7";
class DessertsGridView extends React.Component {
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
              <CardComponent3 />
            </Grid>
            <Grid item xs={6}>
              <CardComponent7 />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default DessertsGridView;
