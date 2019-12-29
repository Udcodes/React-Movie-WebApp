import React from "react";
import Header from "./elements/Header";
import Home from "./Home";

const App = () => (
  <div>
    <Header />
    <Home />
    Start Here!
  </div>
);

export default App;

// FEW THINGS TO NOTE ABOUT JSX
//1. JSX is syntatic sugar for React.createElement
//2. JSX is self closing. e.g <Header />
//3. JSX defined components start with capital letter. e.g <Header></Header>
//4 You can use JavaScript expressions inside of JSX, but you must nest them in {}.
//5 You can nest components just as you would in pure HTML file.
//6  Nested content can be assessed in props.children on your props object.
