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
    if (this.operator === null) {
      if (this.first_input === null) {
        this.first_input = ".";
      } else if (this.first_input.includes(".")) {
        return;
      } else {
        this.first_input = this.first_input + ".";
        this.displayScreen(this.first_input);
      }
    } else {
      if (this.second_input === null) {
        this.second_input = ".";
      } else if (this.second_input.includes(".")) {
        return;
      } else {
        this.second_input = this.second_input + ".";
        this.displayScreen(this.second_input);
      }
    }
  }

  equalButtonClicked() {
    this.calculate();
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
    // If the operator is null, do nothing
    if (this.operator === null) {
      return;
    }

    // When an operator is clicked but no number is chosen before that
    if (this.first_input === null) {
      return;
    }
    // When a number is chosen before an operator is clicked
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

// Execution
document.addEventListener("DOMContentLoaded", function () {
  // queryselector the parent container of the buttons
  const calculator__keys = document.querySelector(".calculator__keys");
  const operation = new Operation();
  // Attach eventlistener to the parent container to listen to all events of children
  calculator__keys.addEventListener("click", (event) => {
    // When there is a click event from any of the children, go find the child named "button"
    // if (event.target.hasAttribute("data-action"))
    if (event.target.matches("button")) {
      //Once found the child named "button", get the value of its attribute 'data-action'
      const button_clicked = event.target;
      const action = button_clicked.getAttribute("data-action");
      if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
      ) {
        operation.operator = action;
        if (operation.first_input !== null && operation.second_input !== null) {
          operation.calculate(action);
        } else {
          return;
        }
        console.log(operation.operator);
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

// Scenario
// When a button !(.key--operator) clicked:
//     if first!
//     assign textContent of the button to first

// if a button (.key--operator) clicked:
//     convert attribute data-action to the operator (+,-,*,/)

//     first + second = result
// first - second = result
// first * second = result
// first / second = result

// first / 0 ==> error

// clear all

// first operator_1 operator_2 second
//     operator_2 replaces operator_1

// first operator_1 second operator_2 third operator_3 fourth ....
//     first operator_1 second = result_1
//         first = result_1
//         operator_1 = operator_2
//         second = third
//         repeat first operator second = result
