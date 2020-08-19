"use strict";
import Operation1 from "./operation.js";
import Display from "./display.js";

//================Execution=================
// Ensure everything is ready
document.addEventListener("DOMContentLoaded", () => {
  // create new Operation1 class
  const operation1 = new Operation1();
  // create new Display class
  const display = new Display();
  const numberButtonClicked = function (number) {
    let input = operation1.inputUpdate(number);
    display.displayScreen(input);
  };
  const decimalButtonClicked = function () {
    let dec_input = operation1.inputUpdateDecimal();
    display.displayScreen(dec_input);
  };
  const equalButtonClicked = function () {
    let result = operation1.equal();
    display.displayScreen(result);
  };
  const acButtonClicked = function () {
    display.displayScreen(0);
    operation1.first_input = null;
    operation1.second_input = null;
    operation1.operator = null;
  };
  // queryselector the parent container of the buttons
  const calculator__keys = document.querySelector(".calculator__keys");
  // Attach eventlistener to the parent container to listen to all events of children
  calculator__keys.addEventListener("click", (event) => {
    // When there is a click event from any of the children, go find the child named "button"
    // if (event.target.hasAttribute("data-action"))
    if (event.target.matches("button")) {
      //Once found the child named "button", get the value of its attribute 'data-action'
      const button_clicked = event.target;
      const action = button_clicked.getAttribute("data-action");
      // if a button is an operator button
      if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
      ) {
        // store the value of data-action into the global var
        operation1.operator = action;
        // cover scenario having more than multiple numbers and operators in the calculation
        // once there are 2 inputs and an operator => run the calculate()
        if (
          operation1.first_input !== null &&
          operation1.second_input !== null
        ) {
          let input = operation1.calculate(action);
          display.displayScreen(input);
        } else {
          return;
        }
      }

      if (action === "decimal") {
        decimalButtonClicked();
      }
      if (action === "clear") {
        acButtonClicked();
      }
      if (action === "calculate") {
        equalButtonClicked();
      }
      // if the button doesnt have 'data-action' value, it is a number
      else if (!action) {
        const number = button_clicked.textContent;
        numberButtonClicked(number);
      }
    }
  });
});
