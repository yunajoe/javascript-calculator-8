// basic seperator
export const BASIC_SEPERATOR = /[:|,]/;

// custom seperator
export const CUSTOM_SEPARATOR = /\/\/(.*?)\\n/;

// error message
export const ERROR_MESSAGES = {
  INVALID_INPUT: "[ERROR] 유효한 구분자와 숫자 문자열을 함께 입력해야합니다.",
  INVALID_INTEGER: "[ERROR] 올바르지 않은 숫자 문자열을 입력하였습니다.",
  NEGATIVE_INTEGER: "[ERROR] 양수(0보다 큰 수)만 입력할 있습니다.",
  MAX_INTEGER: "[ERROR] 범위를 넘어선 숫자입니다.",
  SEPERATOR_MINIMUM_LENGTH: "[ERROR] 구분자는 최소 1글자 이상이어야 합니다.",
  NOT_USED_SEPERATOR_IN_FIRST: "[ERROR] 구분자를 우선적으로 사용해야 합니다.",
  NOT_MATCHED_SEPERATOR: "[ERROR] 구분자와 일치하는 문자열로 입력해야 합니다.",
};
