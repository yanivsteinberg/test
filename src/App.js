import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HomeView from "./views/HomeView";
import CategoryView from "./views/CategoryView";
import Carousel from "./components/Carousel";
import RecipeGridView from "./views/RecipeGridView";
import AboutView from "./views/AboutView";
import RecipeView1 from "./views/RecipeViews/RecipeView1";
import RecipeView2 from "./views/RecipeViews/RecipeView2";
import RecipeView3 from "./views/RecipeViews/RecipeView3";
import RecipeView4 from "./views/RecipeViews/RecipeView4";
import RecipeView5 from "./views/RecipeViews/RecipeView5";
import RecipeView6 from "./views/RecipeViews/RecipeView6";
import RecipeView7 from "./views/RecipeViews/RecipeView7";
import StartersGridView from "./views/CategoryView/StartersGridView";
import MainsGridView from "./views/CategoryView/MainsGridView";
import DessertsGridView from "./views/CategoryView/DessertsGridView";
import DrinksGridView from "./views/CategoryView/DrinksGridView";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          {
            <Container maxWidth="xl">
              <Carousel className="carousel" />
              <h1 className="title">The React Recipebook</h1>
            </Container>
          }

          <Box sx={{ width: "100%" }}>
            <nav className="navbar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">Recipe Categories</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </Box>
        </div>

        <Routes>
          <Route
            exact
            path="/categories"
            element={
              <Container maxWidth="sm">
                <CategoryView />
              </Container>
            }
          />

          <Route
            exact
            path="/about"
            element={
              <Container maxWidth="sm">
                <AboutView />
              </Container>
            }
          />

          <Route
            exact
            path="/recipeview1"
            element={
              <Container maxWidth="sm">
                <RecipeView1 />
              </Container>
            }
          />

          <Route
            exact
            path="/recipeview2"
            element={
              <Container maxWidth="sm">
                <RecipeView2 />
              </Container>
            }
          />

          <Route
            exact
            path="/recipeview3"
            element={
              <Container maxWidth="sm">
                <RecipeView3 />
              </Container>
            }
          />

          <Route
            exact
            path="/recipeview4"
            element={
              <Container maxWidth="sm">
                <RecipeView4 />
              </Container>
            }
          />

          <Route
            exact
            path="/starters"
            element={
              <Container maxWidth="sm">
                <StartersGridView />
              </Container>
            }
          />

          <Route
            exact
            path="/mains"
            element={
              <Container maxWidth="sm">
                <MainsGridView />
              </Container>
            }
          />

          <Route
            exact
            path="/desserts"
            element={
              <Container maxWidth="sm">
                <DessertsGridView />
              </Container>
            }
          />

          <Route
            exact
            path="/drinks"
            element={
              <Container maxWidth="sm">
                <DrinksGridView />
              </Container>
            }
          />

          <Route
            exact
            path="/"
            element={
              <Container maxWidth="sm">
                <HomeView />
                <RecipeGridView />
              </Container>
            }
          />
          <Route
            exact
            path="/recipeview5"
            element={
              <Container maxWidth="sm">
                <RecipeView5 />
              </Container>
            }
          />
          <Route
            exact
            path="/recipeview6"
            element={
              <Container maxWidth="sm">
                <RecipeView6 />
              </Container>
            }
          />
          <Route
            exact
            path="/recipeview7"
            element={
              <Container maxWidth="sm">
                <RecipeView7 />
              </Container>
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
