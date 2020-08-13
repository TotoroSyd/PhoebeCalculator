"use strict";
// console.log("hello");

class Operation {
  constructor() {
    this.first_input = null;
    this.second_input = null;
    this.operator = null;
    this.display = document.querySelector(".calculator__display");
  }

  displayScreen(input) {
    this.display.textContent = input;
  }

  numberButtonClicked(number) {
    // Assign number to num_input

    // checking the operation status to identify if number input should go to second_input variable or not
    // the operator is not set. Update first_input
    if (this.operator === null) {
      // check if the first_input has value or not
      if (this.first_input === null) {
        this.first_input = number;
      } else {
        this.first_input = this.first_input + number;
      }
      // display the number clicked
      this.displayScreen(this.first_input);
    }
    // the operator is set and the first_input is set
    else if (this.operator !== null && this.first_input !== null) {
      // check if the second_input has value or not
      if (this.second_input === null) {
        this.second_input = number;
      } else {
        this.second_input = this.second_input + number;
      }
      // display the number clicked
      this.displayScreen(this.second_input);
    }
  }

  decimalButtonClicked() {
    // checking the operation status to identify if number input should go to second_input variable or not
    if (this.operator === null) {
      // first_input has no value, set it as "0.x"
      if (this.first_input === null) {
        this.first_input = ".";
      }
      // first_input has value, it is a decimal number
      else if (this.first_input.includes(".")) {
        return;
      }
      // first_input has value, it is not a decimal number
      else {
        this.first_input = this.first_input + ".";
        this.displayScreen(this.first_input);
      }
    }
    // the operator has value => first_input is filled => assign value to second_input
    else {
      // second_input has no value, set it as "0.x"
      if (this.second_input === null) {
        this.second_input = ".";
      }
      // second_input has value, it is a decimal number
      else if (this.second_input.includes(".")) {
        return;
      }
      // second_input has value, it is not a decimal number
      else {
        this.second_input = this.second_input + ".";
        this.displayScreen(this.second_input);
      }
    }
  }

  equalButtonClicked() {
    this.calculate();
    // reset operator to prevent program from breaking (doubble click =)
    this.operator = null;
  }

  reset() {
    this.first_input = null;
    this.second_input = null;
    this.operator = null;
  }

  acButtonClicked() {
    this.display.textContent = 0;
    this.reset();
  }

  calculate() {
    let action = this.operator;
    // If the operator is null, do nothing. Prevent double click equalButton that triggers calculate()
    if (this.operator === null) {
      return;
    }
    // When an operator is clicked but no number is chosen before that
    if (this.first_input === null) {
      return;
    }
    // When second_input is null, do nothing even the method is called
    if (this.second_input === null) {
      return;
    }

    // When a number is chosen before an operator is clicked
    // convert string input into Float for the calculation
    const first = parseFloat(this.first_input);
    const second = parseFloat(this.second_input);
    let result;
    if (action === "add") {
      result = this.add(first, second);
    } else if (action === "subtract") {
      result = this.subtract(first, second);
    } else if (action === "multiply") {
      result = this.multiply(first, second);
    } else if (action === "divide") {
      result = this.divide(first, second);
    }
    // cover scenario having more than multiple numbers and operators in the calculation
    this.first_input = result;
    this.second_input = null;
    this.displayScreen(result);
  }

  add(first, second) {
    return first + second;
  }

  subtract(first, second) {
    return first - second;
  }

  multiply(first, second) {
    return first * second;
  }

  divide(first, second) {
    return first / second;
  }
}

//================Execution=================
// Ensure everything is ready
document.addEventListener("DOMContentLoaded", () => {
  // create new Operation class
  const operation = new Operation();
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
        operation.operator = action;
        // cover scenario having more than multiple numbers and operators in the calculation
        // once there are 2 inputs and an operator => run the calculate()
        if (operation.first_input !== null && operation.second_input !== null) {
          operation.calculate(action);
        } else {
          return;
        }
        // console.log(operation.operator);
      }

      if (action === "decimal") {
        operation.decimalButtonClicked();
      }
      if (action === "clear") {
        operation.acButtonClicked();
      }
      if (action === "calculate") {
        operation.equalButtonClicked();
      }
      // if the button doesnt have 'data-action' value, it is a number
      else if (!action) {
        const number = button_clicked.textContent;
        operation.numberButtonClicked(number);
      }
    }
  });
});
