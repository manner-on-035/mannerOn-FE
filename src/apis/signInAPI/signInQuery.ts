import { AxiosError } from 'axios';
import { useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { SignInReq, SignInRes } from '../../types/signUp';
import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import SignInApi from './signInAPI';

const signInApi = new SignInApi();

export const usePostSignUpMutation = (
  useMutationOptions?: UseMutationOptions<HTTPResponse<SignInRes> | BusinessErrorResponse, AxiosError, SignInReq, unknown>,
) => {
  const mutationKey = ['SIGNUP_POST'];

  const result = useMutation({
    mutationKey,
    mutationFn: async (variable: SignInReq) => {
      return await signInApi.postSignUp(variable);
    },
    ...useMutationOptions,
  });

  return { ...result, mutationKey };
};
