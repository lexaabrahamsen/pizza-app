import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PizzaList from "./pizzas/PizzaList";

class App extends React.Component {
  render() {
    return (
      <div>
        <PizzaList />
      </div>
    );
  }
}

export default App;
