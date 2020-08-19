import Display from "../parcel/display.js";
// import "@testing-library/jest-dom";
// query utilities:
import {
  getByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
} from "@testing-library/dom";
// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";

describe("content is shown on screen", () => {
  it(".calculator__display has content", () => {
    /* Jest doesnt run on the actual DOM in index.html. 
      So, I have to create a "fake" DOM element I want to test if my content is displayed*/
    const test_div = document.createElement("div");
    test_div.setAttribute("class", "calculator__display");
    // compulsory attribute "data-testid" to use method .toHaveTextContent from testing library
    test_div.setAttribute("data-testid", "text-content");
    // attach the new element to the DOM body
    document.body.appendChild(test_div);
    // Called the method from class Display()
    const display = new Display();
    // run the method with input (to expect to display) = "hello"
    display.displayScreen("hello");

    // create an actual element var to capture the return of the code to check if the "hello" is on DOM
    const element = getByTestId(document.body, "text-content");
    // set expected result for the test
    expect(element).toHaveTextContent("hello");
  });
});
