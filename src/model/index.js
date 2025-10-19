import { BASIC_SEPERATOR } from "../constant.js";
import Calculate from "./calculate.js";
import Validate from "./validator.js";

class Model {
  static input = "";
  static seperator = "";

  static run(input) {
    const { isCustom } = Validate.checkSeperatorType(input);

    if (isCustom) {
      const { replacedInput, matchedSeperator } =
        Validate.customSeperator(input);
      this.input = replacedInput;
      this.seperator = matchedSeperator;
    } else {
      this.input = input;
      this.seperator = BASIC_SEPERATOR;
    }
    const output = Calculate.calculateNumber(this.input, this.seperator);
    return output;
  }
}

export default Model;
