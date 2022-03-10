import * as React from "react";
import { Stack, Typography } from '@mui/material';
import about from '../images/about.jpg';

class AboutView extends React.Component {
  render() {

    return (


      <Stack>

        <h1>
          About
        </h1>

        <div>
          <div>
            <img src={about} width="80%" height="auto" />
          </div>
        </div>

        <h2>
          ALL THE RECIPES YOU’LL EVER NEED. PERIOD.
        </h2>

        <div>
          <Typography paragraph>To our favorite community of home cooks we say: Welcome back to the React Recipebook!</Typography>
          <Typography paragraph>
            We may have a different name today, but there’s one thing that will never change, and that’s what you can expect from us:</Typography>
          <Typography paragraph>
            In other words, the new version of the React Recipebook! combines all of the things you loved most about the site with some helpful new features, including:</Typography>
          <Typography paragraph> -Over 500,000 dishes created by users like you, with fresh recipes added every day </Typography>
          <Typography paragraph>-Easy access to your favorite saved recipes and the option to organize them into boards </Typography>
          <Typography paragraph >- A new activity feed where you can add your reviews, tweaks, questions and photos </Typography>
          <Typography paragraph >So if you’re hungry for good food and great conversation with fellow cooks, we’re so happy you’re here! And there’s no better place to start than our community’s 75 Top - Rated Recipes of All Time, from five - star banana bread to our most - popular mac and cheese.</Typography>
          <Typography paragraph>Got more questions about the site ? Contact our Customer Support team at help @reactrecipebook.com.</Typography>
          <Typography paragraph>Team Recipebook</Typography>
        </div >
      </Stack >


    );
  }
}

export default AboutView;