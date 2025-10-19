import { ERROR_MESSAGES } from "../constant.js";

class Calculate {
  static validateNumber(str) {
    const num = Number(str);
    if (isNaN(num)) {
      throw new Error(ERROR_MESSAGES.INVALID_INTEGER);
    }
    if (num <= 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_INTEGER);
    }

    if (num > Number.MAX_SAFE_INTEGER) {
      throw new Error(ERROR_MESSAGES.MAX_INTEGER);
    }

    return num;
  }

  static calculateNumber(input, separator) {
    const numberArr = input.split(separator).map(Calculate.validateNumber);
    return numberArr.reduce((acc, num) => {
      const newSum = acc + num;
      if (newSum > Number.MAX_SAFE_INTEGER) {
        throw new Error(ERROR_MESSAGES.MAX_INTEGER);
      }
      return newSum;
    }, 0);
  }
}

export default Calculate;
