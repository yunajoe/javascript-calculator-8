import { ERROR_MESSAGES } from "../constant.js";
import Model from "../Model/index.js";

class Controller {
  static isEmptyString(input) {
    return input.length === 0;
  }

  static isNegativeNmber(input) {
    return Number(input) < 0;
  }

  static isOnlyNumber(input) {
    const num = Number(input);
    if (!isNaN(num)) {
      const isNegativeNumber = this.isNegativeNmber(num);
      if (isNegativeNumber) {
        throw new Error(ERROR_MESSAGES.NEGATIVE_INTEGER);
      }
      const isOverMaxNumber = this.isOverMaxNumber(num);
      if (isOverMaxNumber) {
        throw new Error(ERROR_MESSAGES.MAX_INTEGER);
      }

      return true;
    }
  }

  static isOverMaxNumber(input) {
    const limitNum = Number.MAX_SAFE_INTEGER; // 9007199254740991
    return Number(input) > limitNum;
  }

  static run(input) {
    const trimmedInput = input.trim();
    const isEmptyString = this.isEmptyString(trimmedInput);
    const isOnlyNumber = this.isOnlyNumber(trimmedInput);

    if (isEmptyString) {
      return 0;
    }
    if (isOnlyNumber) {
      return Number(trimmedInput);
    }

    return Model.run(trimmedInput);
  }
}

export default Controller;
