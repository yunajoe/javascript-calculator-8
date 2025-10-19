import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("문자열 계산기", () => {
  let app;
  beforeEach(() => {
    app = new App();
  });
  describe("입력/출력 통합 테스트", () => {
    let logSpy;
    beforeEach(() => {
      logSpy = getLogSpy();
    });
    test("빈 문자열 입력", async () => {
      const inputs = ["", "  ", "\n"];
      mockQuestions(inputs);
      const outputs = ["결과 : 0"];
      await app.run();
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("기본 구분자 입력", async () => {
      const inputs = ["1,2,3", "1:2:3"];
      mockQuestions(inputs);
      const outputs = ["결과 : 6"];
      await app.run();
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
    test("커스텀 구분자 입력(두개이상의 숫자 문자열만 있는경우)", async () => {
      const inputs = ["//;\\n1;2;3", "//:\\n1:2:3"];
      mockQuestions(inputs);
      const outputs = ["결과 : 6"];
      await app.run();
      outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test.each([
      ["//;\\n1", "결과 : 1"],
      ["//:\\n123", "결과 : 123"],
    ])("커스텀 구분자 입력 테스트", async (input, output) => {
      mockQuestions([input]);
      await app.run();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  describe("입력 예외 처리 테스트", () => {
    test.each(["123", "0"])("숫자 문자열만 있는 경우", async (input) => {
      mockQuestions([input]);
      await expect(app.run()).rejects.toThrow(
        "[ERROR] 유효한 구분자와 숫자 문자열을 함께 입력해야합니다."
      );
    });

    test.each(["1@2@3", "1?2?3", "12#3", "@@@", "/;/1;2;3"])(
      "구분자를 제대로 사용하지 않은 경우",
      async (input) => {
        mockQuestions([input]);
        await expect(app.run()).rejects.toThrow(
          "[ERROR] 유효한 구분자와 숫자 문자열을 함께 입력해야합니다."
        );
      }
    );

    test.each(["3//;\\n1;2;3"])(
      "구분자가 가장 먼저 나오지 않는 경우",
      async (input) => {
        mockQuestions([input]);
        await expect(app.run()).rejects.toThrow(
          "[ERROR] 구분자를 우선적으로 사용해야 합니다."
        );
      }
    );

    test.each(["0,1,2", "-1,2,3", "1,2,-3", "1,-2,3"])(
      "숫자 문자열이 양수가 아닌게 포함되어 있을 경우",
      async (input) => {
        mockQuestions([input]);
        await expect(app.run()).rejects.toThrow(
          "[ERROR] 양수(0보다 큰 수)만 입력할 있습니다."
        );
      }
    );
    test.each(["9007199254740990,1,2", "9007199254740990:1:2"])(
      "숫자 문자열이 안전한 정수(9007199254740991)를 넘는 경우",
      async (input) => {
        mockQuestions([input]);
        await expect(app.run()).rejects.toThrow(
          "[ERROR] 범위를 넘어선 숫자입니다."
        );
      }
    );

    test.each(["1:2:A", "C:A:C", "C,A,C"])(
      "숫자 문자열를 제대로 사용하지 않은 경우",
      async (input) => {
        mockQuestions([input]);
        await expect(app.run()).rejects.toThrow(
          "[ERROR] 올바르지 않은 숫자 문자열을 입력하였습니다."
        );
      }
    );

    test.each(["//;\\n1:2:3", "//1:2:3//;\\n1;2;3"])(
      "커스텀 구분자 사용시 다른 구분자로 문자열을 나눌떄",
      async (input) => {
        mockQuestions([input]);
        await expect(app.run()).rejects.toThrow(
          "[ERROR] 구분자와 일치하는 문자열로 입력해야 합니다."
        );
      }
    );
  });
});
