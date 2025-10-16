// basic seperator
export const BASIC_SEPERATOR = /[:|,]/;

// custom seperator
export const CUSTOM_SEPARATOR = /\/\/(.*?)\\n/;

// error message
export const ERROR_MESSAGES = {
  NEGATIVE_INTEGER: "[ERROR] 음수는 입력할 수 없습니다",
  INVALID_INTEGER: "[ERROR] 올바르지 않은 숫자 문자열을 입력하였습니다.",
  SEPERATOR_MINIMUM_LENGTH: "[ERROR] 구분자는 최소 1글자 이상이어야 합니다.",
  NOT_USED_SEPERATOR:
    "[ERROR] 기본 구분자 혹은 커스텀 구분자를 사용해야 합니다.",
  NOT_USED_SEPERATOR_IN_FIRST: "[ERROR] 구분자를 우선적으로 사용해야 합니다.",
  NOT_MATCHED_SEPERATOR: "[ERROR] 구분자와 일치하는 문자열로 입력해야 합니다.",
};
