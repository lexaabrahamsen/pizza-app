import React from "react";

import PizzaList from "./pizzas/PizzaList";
import Counter from "./pizzas/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <PizzaList />
        <Counter />
      </div>
    );
  }
}

export default App;
