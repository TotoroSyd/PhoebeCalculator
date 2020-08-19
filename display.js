export default class Display {
  constructor() {
    this.display = document.querySelector(".calculator__display");
  }
  displayScreen(input) {
    this.display.textContent = input;
  }
}
