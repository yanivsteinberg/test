import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HomeView from './views/HomeView';


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

          <Box sx={{ width: '100%' }}>
            <h1 className='title'>
              Recipies
            </h1>

            <nav className='navbar'>
              <ul >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/completed">Recipe Categories</Link>
                </li>
                <li>
                  <Link to="/information">About</Link>
                </li>
              </ul>
            </nav>
          </Box>
        </div>

        <Routes>
          <Route exact path="/" element={
            <Container maxWidth="sm">
              <HomeView
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
