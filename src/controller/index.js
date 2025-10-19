import { ERROR_MESSAGES } from "../constant.js";
import Model from "../Model/index.js";

class Controller {
  static isEmptyString(input) {
    return input.length === 0;
  }

  static isPositiveNumber(input) {
    return input > 0;
  }

  static isOverMaxNumber(input) {
    const limitNum = Number.MAX_SAFE_INTEGER; // 9007199254740991
    return input > limitNum;
  }

  static run(input) {
    const trimmedInput = input.trim();

    const isEmptyString = this.isEmptyString(trimmedInput);
    if (isEmptyString) {
      return 0;
    }

    if (Number(input)) throw new Error(ERROR_MESSAGES.INVALID_INPUT);

    return Model.run(trimmedInput);
  }
}

export default Controller;
