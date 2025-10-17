import { ERROR_MESSAGES } from "../constant.js";

class Calculate {
  static calculateNumber(input, seperator) {
    const numberArr = input.split(seperator).map((item) => Number(item));
    const sum = numberArr.reduce((acc, num) => {
      if (isNaN(num)) throw new Error(ERROR_MESSAGES.INVALID_INTEGER);
      if (num < 0) throw new Error(ERROR_MESSAGES.NEGATIVE_INTEGER);
      acc += num;
      return acc;
    }, 0);
    return sum;
  }
}

export default Calculate;
