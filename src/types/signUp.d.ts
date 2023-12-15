export interface SignInReq {
  email: string;
  password: string;
  checkPassword: string;
  nickname: string;
  gender: string;
  job: string;
  ageRange: string;
}

export interface SignInRes {
  message: string;
  statusCode: string;
}
