import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import { SignInReq, SignInRes } from '../../types/signUp';
import { API_URL } from '@shared/index';
import Api from '../Api';

export default class SignInApi extends Api {
  constructor() {
    super();
  }

  public postSignUp(variable: SignInReq): Promise<HTTPResponse<SignInRes> | BusinessErrorResponse> {
    return this.post<SignInRes, SignInReq>({
      url: API_URL.SIGNIN.SIGNUP,
      data: variable,
    });
  }
}
