const REGEX = {
  id: /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  pw: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
  nickname: /^[a-zA-Z가-힣0-9]{1,10}$/,
};

export default REGEX;
