import {
  BASIC_SEPARATOR,
  CUSTOM_SEPARATOR,
  ERROR_MESSAGES,
} from "../constant.js";

class Validate {
  static validateSeparatorPosition(input, seperator) {
    if (!input.startsWith(seperator)) {
      throw new Error(ERROR_MESSAGES.NOT_USED_SEPARATOR_IN_FIRST);
    }
  }

  static validateSeparatorLength(separator) {
    if (separator.length < 1) {
      throw new Error(ERROR_MESSAGES.SEPARATOR_MINIMUM_LENGTH);
    }
  }

  static customSeparator(input) {
    const match = input.match(CUSTOM_SEPARATOR);
    const [matchedStr, matchedSeparator] = match;

    Validate.validateSeparatorLength(matchedSeparator);
    Validate.validateSeparatorPosition(input, matchedStr);

    const replacedInput = input.replace(matchedStr, "");

    if (replacedInput.length === 0)
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);

    if (Number(replacedInput)) {
      return { replacedInput, matchedSeparator };
    }

    if (!replacedInput.includes(matchedSeparator)) {
      throw new Error(ERROR_MESSAGES.NOT_MATCHED_SEPARATOR);
    }

    return { replacedInput, matchedSeparator };
  }

  static checkSeperatorType(input) {
    const isBasic = BASIC_SEPARATOR.test(input);
    const isCustom = CUSTOM_SEPARATOR.test(input);
    if (!isBasic && !isCustom) {
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
    return { isBasic, isCustom };
  }
}

export default Validate;
