import React from "react";

import { Router } from "@reach/router";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <React.Fragment>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <Home />
    <GlobalStyle />
  </React.Fragment>
);

export default App;

// FEW THINGS TO NOTE ABOUT JSX
//1. JSX is syntactic sugar for React.createElement
//2. JSX is self closing. e.g <Header />
//3. JSX defined components start with capital letter. e.g <Header></Header>
//4 You can use JavaScript expressions inside of JSX, but you must nest them in {}.
//5 You can nest components just as you would in pure HTML file.
//6  Nested content can be assessed in props.children on your props object.
