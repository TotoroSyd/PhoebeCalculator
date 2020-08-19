import Operation1 from "./operation.js";

describe("do nothing when any of the input is null", () => {
  it("return undefined when first_input is null", () => {
    let operation = new Operation1("", "4", "add");
    let actual = operation.calculate();
    // let exp = undefined; show failed
    // let exp = "invalid"; script "return 'invalid'" show failed
    let exp = "invalid";
    expect(actual).toBe(exp);
  });
  it("return undefined when second_input is null", () => {
    let operation = new Operation("3", null, "add");
    let actual = operation.calculate();
    // let exp = undefined; show failed
    let exp = "invalid"; //script "return 'invalid'" show failed
    // let exp = NaN;
    expect(actual).toBe(exp);
  });
  it("return undefined when operator is null", () => {
    let operation = new Operation("3", "4", null);
    let actual = operation.calculate();
    // let exp = NaN; show failed
    // let exp = "invalid"; script "return 'invalid'" show failed
    // let exp = undefined;
    let exp = "invalid";
    expect(actual).toBe(exp);
  });
});

describe("Add operation", () => {
  it("add two numbers correctly", () => {
    let operation = new Operation("3", "4", "add");
    let actual = operation.calculate();
    let exp = 7;
    expect(actual).toBe(exp);
  });
  it("add two negative numbers correctly", () => {
    let operation = new Operation("-3", "-4", "add");
    let actual = operation.calculate();
    let exp = -7;
    expect(actual).toBe(exp);
  });
  it("add one negative number, one positive number correctly", () => {
    let operation = new Operation("3", "-4", "add");
    let actual = operation.calculate();
    let exp = -1;
    expect(actual).toBe(exp);
  });
  it("add decimal numbers correctly", () => {
    let operation = new Operation("1.254", "2.254", "add");
    let actual = operation.calculate();
    let exp = 3.508;
    expect(actual).toBe(exp);
  });
  it("add one decimal number, one integer correctly", () => {
    let operation = new Operation("1.254", "4", "add");
    let actual = operation.calculate();
    let exp = 5.254;
    expect(actual).toBe(exp);
  });
});

describe("Subtract operation", () => {
  it("subtract two numbers correctly", () => {
    let operation = new Operation("3", "4", "subtract");
    let actual = operation.calculate();
    let exp = -1;
    expect(actual).toBe(exp);
  });
  it("subtract two negative numbers correctly", () => {
    let operation = new Operation("-3", "-4", "subtract");
    let actual = operation.calculate();
    let exp = 1;
    expect(actual).toBe(exp);
  });
  it("subtract one negative number, one positive number correctly", () => {
    let operation = new Operation("3", "-4", "subtract");
    let actual = operation.calculate();
    let exp = 7;
    expect(actual).toBe(exp);
  });
  it("subtract decimal numbers correctly", () => {
    let operation = new Operation("1.254", "2.254", "subtract");
    let actual = operation.calculate();
    let exp = -1;
    expect(actual).toBe(exp);
  });
  it("subtract one decimal number, one integer correctly", () => {
    let operation = new Operation("1.254", "4", "subtract");
    let actual = operation.calculate();
    let exp = -2.746;
    expect(actual).toBe(exp);
  });
});

describe("Multiply operation", () => {
  it("multiply two numbers correctly", () => {
    let operation = new Operation("3", "4", "multiply");
    let actual = operation.calculate();
    let exp = 12;
    expect(actual).toBe(exp);
  });
  it("multiply two negative numbers correctly", () => {
    let operation = new Operation("-3", "-4", "multiply");
    let actual = operation.calculate();
    let exp = 12;
    expect(actual).toBe(exp);
  });
  it("multiply one negative number, one positive number correctly", () => {
    let operation = new Operation("3", "-4", "multiply");
    let actual = operation.calculate();
    let exp = -12;
    expect(actual).toBe(exp);
  });
  it("multiply decimal numbers correctly", () => {
    let operation = new Operation("1.25", "2.25", "multiply");
    let actual = operation.calculate();
    let exp = 2.8125;
    expect(actual).toBe(exp);
  });
  it("multiply one decimal number, one integer correctly", () => {
    let operation = new Operation("1.254", "4", "multiply");
    let actual = operation.calculate();
    let exp = 5.016;
    expect(actual).toBe(exp);
  });
});

describe("Divide operation", () => {
  it("divide two numbers correctly", () => {
    let operation = new Operation("6", "4", "divide");
    let actual = operation.calculate();
    let exp = 1.5;
    expect(actual).toBe(exp);
  });
  it("divide two negative numbers correctly", () => {
    let operation = new Operation("-3", "-4", "divide");
    let actual = operation.calculate();
    let exp = 0.75;
    expect(actual).toBe(exp);
  });
  it("divide one negative number, one positive number correctly", () => {
    let operation = new Operation("3", "-4", "divide");
    let actual = operation.calculate();
    let exp = -0.75;
    expect(actual).toBe(exp);
  });
  it("divide decimal numbers correctly", () => {
    let operation = new Operation("2.25", "1.5", "divide");
    let actual = operation.calculate();
    let exp = 1.5;
    expect(actual).toBe(exp);
  });
  it("divide one decimal number, one integer correctly", () => {
    let operation = new Operation("1.25", "4", "divide");
    let actual = operation.calculate();
    let exp = 0.3125;
    expect(actual).toBe(exp);
  });
});
