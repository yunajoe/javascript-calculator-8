import { BASIC_SEPARATOR } from "../constant.js";
import Calculate from "./calculate.js";
import Validate from "./validator.js";

class Model {
  static input = "";
  static separator = "";

  static run(input) {
    const { isCustom } = Validate.checkSeparatorType(input);

    if (isCustom) {
      const { replacedInput, matchedSeparator } =
        Validate.customSeparator(input);
      this.input = replacedInput;
      this.separator = matchedSeparator;
    } else {
      this.input = input;
      this.separator = BASIC_SEPARATOR;
    }
    const output = Calculate.calculateNumber(this.input, this.separator);
    return output;
  }
}

export default Model;
