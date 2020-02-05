import React, { Component } from "react";
import PizzaData from "../pizzas.json";
class PizzaList extends React.Component {
  render() {
    return (
      <div>
        <h1>Pizza List file</h1>
        {PizzaData.map((pizzaTopping, topping) => {
          return <h1>{pizzaTopping.toppings}</h1>;
        })}
      </div>
    );
  }
}

export default PizzaList;
