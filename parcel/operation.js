export default class Operation1 {
  constructor() {
    this.first_input = null;
    this.second_input = null;
    this.operator = null;
  }

  inputUpdate(number) {
    // checking the operation status to identify if number input should go to second_input variable or not
    // the operator is not set. Update first_input
    if (this.operator === null) {
      // check if the first_input has value or not
      if (this.first_input === null) {
        this.first_input = number;
      } else {
        this.first_input = this.first_input + number;
      }
      return this.first_input;
    }
    // the operator is set and the first_input is set
    else if (this.operator !== null && this.first_input !== null) {
      // check if the second_input has value or not
      if (this.second_input === null) {
        this.second_input = number;
      } else {
        this.second_input = this.second_input + number;
      }
      return this.second_input;
    }
  }

  inputUpdateDecimal() {
    // checking the operation status to identify if number input should go to second_input variable or not
    if (this.operator === null) {
      // first_input has no value, set it as "0.x"
      if (this.first_input === null) {
        this.first_input = "0.";
        return this.first_input;
      }
      // first_input has value, it is a decimal number
      else if (this.first_input.includes(".")) {
        return this.first_input;
      }
      // first_input has value, it is not a decimal number
      else {
        this.first_input = this.first_input + ".";
        return this.first_input;
      }
    }
    // the operator has value => first_input is filled => assign value to second_input
    else {
      // second_input has no value, set it as "0.x"
      if (this.second_input === null) {
        this.second_input = "0.";
        return this.second_input;
      }
      // second_input has value, it is a decimal number
      else if (this.second_input.includes(".")) {
        return this.second_input;
      }
      // second_input has value, it is not a decimal number
      else {
        this.second_input = this.second_input + ".";
        return this.second_input;
      }
    }
  }

  reset() {
    this.first_input = null;
    this.second_input = null;
    this.operator = null;
  }

  calculate(f, s, action) {
    // If the operator is null, do nothing. Prevent double click equalButton that triggers calculate()
    // if (this.operator === null) {
    //   return 0;
    // }

    // // if (this.first_input === null) {
    // //   return;
    // // }
    // // When second_input is null, do nothing even the method is called
    // if (this.second_input === null) {
    //   return 0;
    // }
    // if (Number.isNaN(this.second_input)) {
    //   return;
    // }

    // When a number is chosen before an operator is clicked
    let result;
    if (action === "add") {
      result = f + s;
    } else if (action === "subtract") {
      result = f - s;
    } else if (action === "multiply") {
      result = f * s;
    } else if (action === "divide") {
      result = f / s;
    }
    // cover scenario having more than multiple numbers and operators in the calculation
    // return result will be the input for displayScreen()
    this.first_input = result;
    this.second_input = null;
    return result;
  }
}
