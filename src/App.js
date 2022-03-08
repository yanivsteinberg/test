import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HomeView from './views/HomeView';
import CategoryView from './views/CategoryView';
import Carousel from './components/Carousel';
import RecipeGridView from './views/RecipeGridView';
import AuthorsView from './views/AuthorsView';
import RecipeView1 from './views/RecipeView1';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  };
  render() {
    return (
      <>
        <div>
          {
            <Container maxWidth="xl">
              <Carousel
                className='carousel' />
              <h1 className='title'>
                The React Recipebook
              </h1>
            </Container>
          }

          <Box sx={{ width: '100%' }}>

            <nav className='navbar'>
              <ul >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Recipe Categories</Link>
                </li>
                <li>
                  <Link to="/authors">Authors</Link>
                </li>
              </ul>
            </nav>
          </Box>
        </div>

        <Routes>

          <Route exact path="/categories" element={
            <Container maxWidth="sm">
              <CategoryView
              />
            </Container>
          }
          />

          <Route exact path="/authors" element={
            <Container maxWidth="sm">
              <AuthorsView
              />
            </Container>
          }
          />

          <Route exact path="/recipeview1" element={
            <Container maxWidth="sm">
              <RecipeView1
              />
            </Container>
          }
          />

          <Route exact path="/" element={
            <Container maxWidth="sm">
              <HomeView
              />
              <RecipeGridView
              />
            </Container>

          }
          />

        </Routes>
      </>
    )
  };
}

export default App;
