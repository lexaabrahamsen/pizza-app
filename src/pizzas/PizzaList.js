import React, { Component } from "react";
import PizzaData from "../pizzas.json";

class PizzaList extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    let { count } = this.state;

    return (
      <div>
        <h1>Pizza List file</h1>
        {PizzaData.map((pizzaTopping, index) => {
          return (
            <div>
              <h4>{pizzaTopping.toppings}</h4>
              <p>Count: {count} </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PizzaList;

//
// class PizzaList extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Pizza List file</h1>
//         {PizzaData.map((pizzaTopping, topping) => {
//           return <h1>{pizzaTopping.toppings}</h1>;
//         })}
//       </div>
//     );
//   }
// }
//
// export default PizzaList;
