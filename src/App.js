import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const trimmedInput = input.trim();

    // basic seperator
    const BASIC_SEPERATOR = /[:|,]/;

    // custom seperator
    const CUSTOM_SEPARATOR = /\/\/(.*?)\\n/;

    const isBasic = BASIC_SEPERATOR.test(trimmedInput);
    const isCustom = CUSTOM_SEPARATOR.test(trimmedInput);

    // 빈무자열일 경우는
    if (trimmedInput.length === 0) {
      return;
    }

    // 아래 로직들은 최소 1글자 이상일경우 해당된다.

    // 기본 구분자 혹은 커스텀 구분자 사용안하면은 에러
    if (!isBasic && !isCustom) {
      throw new Error(
        "[ERROR] 기본 구분자 혹은 커스텀 구분자를 사용해야 합니다."
      );
    }

    // 먼저 커스텀 구분자가 있는지 확인
    if (isCustom) {
      const matchedStr = trimmedInput.match(CUSTOM_SEPARATOR)[0];
      const matchedSeperator = trimmedInput.match(CUSTOM_SEPARATOR)[1];

      // 구분자가 최소 한글자 이상이어야 한다.
      if (matchedSeperator.length < 1) {
        throw new Error("[ERROR] 구분자는 최소 1글자 이상이어야 합니다.");
      }

      // 구분자는 가장 먼저 사용해야 한다.
      if (trimmedInput.indexOf(matchedStr) !== 0) {
        throw new Error("[ERROR] 구분자를 우선적으로 사용해야 합니다.");
      }

      const replacedTrimmedInput = trimmedInput.replace(matchedStr, "");

      // 구분자와 일치하는 문자열로 입력
      if (!replacedTrimmedInput.includes(matchedSeperator)) {
        throw new Error("[ERROR] 구분자와 일치하는 문자열로 입력해야 합니다.");
      }

      const arr = replacedTrimmedInput
        .split(matchedSeperator)
        .map((item) => Number(item));

      arr.forEach((num) => {
        if (num < 0) {
          throw new Error("[ERROR] 음수는 사용하지 못합니다.");
        }
      });
      return;
    }

    // 기본 구분자가 있는지 확인
    if (isBasic) {
      const arr = trimmedInput
        .split(BASIC_SEPERATOR)
        .map((item) => Number(item));

      arr.forEach((num) => {
        if (isNaN(num)) {
          throw new Error(
            "[ERROR] 올바르지 않은 숫자 문자열을 입력하였습니다."
          );
        }
        if (num < 0) {
          throw new Error("[ERROR] 음수는 사용하지 못합니다.");
        }
      });
    }
  }
}

export default App;
