import Model from "./model.js";
import View from "./view.js";

class Controller {
  static isEmptyString(input) {
    return input.length === 0;
  }

  static run(input) {
    const trimmedInput = input.trim();
    const isEmptyString = this.isEmptyString(trimmedInput);
    if (isEmptyString) {
      View.printResult(0);
    } else {
      Model.checkValidInput(trimmedInput);
    }
  }
}

export default Controller;
