import {
  BASIC_SEPERATOR,
  CUSTOM_SEPARATOR,
  ERROR_MESSAGES,
} from "../constant.js";

class Validate {
  static validateSeparatorPosition(input, seperator) {
    if (!input.startsWith(seperator)) {
      throw new Error(ERROR_MESSAGES.NOT_USED_SEPERATOR_IN_FIRST);
    }
  }

  static validateSeperatorLength(separator) {
    if (separator.length < 1) {
      throw new Error(ERROR_MESSAGES.SEPERATOR_MINIMUM_LENGTH);
    }
  }

  static customSeperator(input) {
    const match = input.match(CUSTOM_SEPARATOR);
    const [matchedStr, matchedSeperator] = match;

    Validate.validateSeperatorLength(matchedSeperator);
    Validate.validateSeparatorPosition(input, matchedStr);

    const replacedInput = input.replace(matchedStr, "");

    if (replacedInput.length === 0)
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);

    if (Number(replacedInput)) {
      return { replacedInput, matchedSeperator };
    }

    if (!replacedInput.includes(matchedSeperator)) {
      throw new Error(ERROR_MESSAGES.NOT_MATCHED_SEPERATOR);
    }

    return { replacedInput, matchedSeperator };
  }

  static checkSeperatorType(input) {
    const isBasic = BASIC_SEPERATOR.test(input);
    const isCustom = CUSTOM_SEPARATOR.test(input);
    if (!isBasic && !isCustom) {
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
    return { isBasic, isCustom };
  }
}

export default Validate;
