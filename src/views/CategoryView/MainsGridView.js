import * as React from "react";
import { Grid } from '@mui/material';
import CardComponent from '../../components/CardComponents/CardComponent';

class MainsGridView extends React.Component {
  render() {

    return (
      <>
        <div>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <CardComponent
              />

            </Grid>

          </Grid>
        </div>
      </>
    );

  }
}

export default MainsGridView;