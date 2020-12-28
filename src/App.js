import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Numerology from "./pages/Numerology";
import Topics from "./pages/Topics";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/theme";

export default function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/numerology">Numerology</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/numerology">
                <Numerology />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}
