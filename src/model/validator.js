import {
  BASIC_SEPERATOR,
  CUSTOM_SEPARATOR,
  ERROR_MESSAGES,
} from "../constant.js";

class Validate {
  static customSeperator(input) {
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
    return { replacedInput, matchedSeperator };
  }

  static checkValidInput(input) {
    const isBasic = BASIC_SEPERATOR.test(input);
    const isCustom = CUSTOM_SEPARATOR.test(input);
    if (!isBasic && !isCustom) {
      throw new Error(ERROR_MESSAGES.NOT_USED_SEPERATOR);
    }
    return { isBasic, isCustom };
  }
}

export default Validate;
