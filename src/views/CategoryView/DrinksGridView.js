import * as React from "react";
import { Grid } from '@mui/material';
import CardComponent4 from '../../components/CardComponents/CardComponent4';

class StartersGridView extends React.Component {
  render() {

    return (
      <>
        <div>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <CardComponent4
              />

            </Grid>

          </Grid>
        </div>
      </>
    );

  }
}

export default StartersGridView;