export interface SignUpEmailDuplicateReq {
  email: string;
}

export interface SignUpEmailDuplicateRes {
  statusCode: string;
  message: string;
  data: boolean;
}

export interface SignUpReq {
  email: string;
  password: string;
  checkPassword: string;
  nickname: string;
  gender: string;
  job: string;
  ageRange: string;
}

export interface SignUpRes {
  message: string;
  statusCode: string;
}

export interface SignInReq {
  email: string;
  password: string;
}

export interface SignInRes {
  message: string;
  statusCode: string;
  data: null;
}
