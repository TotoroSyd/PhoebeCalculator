import Operation1 from "../parcel/operation.js";

describe("Add operation", () => {
  it("add two numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(3, 4, "add");
    // console.log(actual);
    let exp = 7;
    expect(actual).toEqual(exp);
  });
  it("add two negative numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(-3, -4, "add");
    let exp = -7;
    expect(actual).toBe(exp);
  });
  it("add one negative number, one positive number correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(3, -4, "add");
    let exp = -1;
    expect(actual).toBe(exp);
  });
  it("add decimal numbers correctly", () => {
    let operation = new Operation1(1.254, 2.254, "add");
    let actual = operation.calculate(1.254, 2.254, "add");
    let exp = 3.508;
    expect(actual).toBe(exp);
  });
  it("add one decimal number, one integer correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(1.254, 4, "add");
    let exp = 5.254;
    expect(actual).toBe(exp);
  });
});

describe("Subtract operation", () => {
  it("subtract two numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(3, 4, "subtract");
    let exp = -1;
    expect(actual).toBe(exp);
  });
  it("subtract two negative numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(-3, -4, "subtract");
    let exp = 1;
    expect(actual).toBe(exp);
  });
  it("subtract one negative number, one positive number correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(-3, 4, "subtract");
    let exp = -7;
    expect(actual).toBe(exp);
  });
  it("subtract decimal numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(1.254, 2.254, "subtract");
    let exp = -1;
    expect(actual).toBe(exp);
  });
  it("subtract one decimal number, one integer correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(1.254, 4, "subtract");
    let exp = -2.746;
    expect(actual).toBe(exp);
  });
});

describe("Multiply operation", () => {
  it("multiply two numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(3, 4, "multiply");
    let exp = 12;
    expect(actual).toBe(exp);
  });
  it("multiply two negative numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(-3, -4, "multiply");
    let exp = 12;
    expect(actual).toBe(exp);
  });
  it("multiply one negative number, one positive number correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(3, -4, "multiply");
    let exp = -12;
    expect(actual).toBe(exp);
  });
  it("multiply decimal numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(1.25, 2.25, "multiply");
    let exp = 2.8125;
    expect(actual).toBe(exp);
  });
  it("multiply one decimal number, one integer correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(1.254, 4, "multiply");
    let exp = 5.016;
    expect(actual).toBe(exp);
  });
});

describe("Divide operation", () => {
  it("divide two numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(6, 4, "divide");
    let exp = 1.5;
    expect(actual).toBe(exp);
  });
  it("divide two negative numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(-3, -4, "divide");
    let exp = 0.75;
    expect(actual).toBe(exp);
  });
  it("divide one negative number, one positive number correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(3, -4, "divide");
    let exp = -0.75;
    expect(actual).toBe(exp);
  });
  it("divide decimal numbers correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(2.25, 1.5, "divide");
    let exp = 1.5;
    expect(actual).toBe(exp);
  });
  it("divide one decimal number, one integer correctly", () => {
    let operation = new Operation1();
    let actual = operation.calculate(1.25, 4, "divide");
    let exp = 0.3125;
    expect(actual).toBe(exp);
  });
});

describe("AC clicked", () => {
  it("Reset first_input, second_input, operation to null", () => {
    let operation = new Operation1();
    operation.first_input = 5;
    operation.second_input = 6;
    operation.operator = "multiply";
    operation.reset();
    expect(operation.first_input).toBe(null);
    expect(operation.second_input).toBe(null);
    expect(operation.operator).toBe(null);
  });
});
