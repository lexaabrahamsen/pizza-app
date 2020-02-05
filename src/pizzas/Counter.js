import React, { Component } from "react";
import PizzaData from "../pizzas.json";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>Pizza List file</p>
        {PizzaData.map((pizzaTopping, index) => {
          return <p>{pizzaTopping.toppings}</p>;
        })}
      </div>
    );
  }
}

export default Counter;

// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }
//
//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
//
//   render() {
//     let { count } = this.state;
//     return (
//       <div>
//         <h2>Count: {count} </h2>
//       </div>
//     );
//   }
// }
