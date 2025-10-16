import {
  BASIC_SEPERATOR,
  CUSTOM_SEPARATOR,
  ERROR_MESSAGES,
} from "./constant.js";
import View from "./view.js";

class Model {
  static calculateNumber(input, seperator) {
    let result = 0;
    const numberArr = input.split(seperator).map((item) => Number(item));
    numberArr.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(ERROR_MESSAGES.INVALID_INTEGER);
      }
      if (num < 0) {
        throw new Error(ERROR_MESSAGES.NEGATIVE_INTEGER);
      }

      result += num;
    });
    View.printResult(result);
  }

  static basicSeperatorProcess(input) {
    this.calculateNumber(input, BASIC_SEPERATOR);
  }

  static customSeperatorProcess(input) {
    const matchedStr = input.match(CUSTOM_SEPARATOR)[0];
    const matchedSeperator = input.match(CUSTOM_SEPARATOR)[1];
    if (matchedSeperator.length < 1) {
      throw new Error(ERROR_MESSAGES.SEPERATOR_MINIMUM_LENGTH);
    }

    if (input.indexOf(matchedStr) !== 0) {
      throw new Error(ERROR_MESSAGES.NOT_USED_SEPERATOR_IN_FIRST);
    }
    const replacedInput = input.replace(matchedStr, "");

    if (replacedInput.length > 1 && !replacedInput.includes(matchedSeperator)) {
      throw new Error(ERROR_MESSAGES.NOT_MATCHED_SEPERATOR);
    }

    this.calculateNumber(replacedInput, matchedSeperator);
  }
  static checkValidInput(input) {
    const isBasic = BASIC_SEPERATOR.test(input);
    const isCustom = CUSTOM_SEPARATOR.test(input);

    if (!isBasic && !isCustom) {
      throw new Error(ERROR_MESSAGES.NOT_USED_SEPERATOR);
    }

    // custom이 상위 개념이기 떄문에 먼저 처리하자.
    if (isCustom) {
      this.customSeperatorProcess(input);
    } else if (isBasic) {
      this.basicSeperatorProcess(input);
    }
  }
}

export default Model;
