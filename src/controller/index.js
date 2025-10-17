import Model from "../Model/index.js";

class Controller {
  static isEmptyString(input) {
    return input.length === 0;
  }

  static run(input) {
    const trimmedInput = input.trim();
    const isEmptyString = this.isEmptyString(trimmedInput);
    if (isEmptyString) {
      return 0;
    }
    return Model.run(trimmedInput);
  }
}

export default Controller;
