import { AxiosError } from 'axios';
import { useQuery, useMutation, UseMutationOptions, UseQueryResult } from '@tanstack/react-query';
import { KEY } from '@shared/index';
import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import { SignUpEmailDuplicateReq, SignUpEmailDuplicateRes, SignUpReq, SignUpRes, SignInReq, SignInRes } from '../../types/signUp';
import SignInApi from './signInAPI';

const signInApi = new SignInApi();

export const useGetEmailDuplicateQuery = (
  variable: SignUpEmailDuplicateReq,
): UseQueryResult<HTTPResponse<SignUpEmailDuplicateRes>> => {
  return useQuery({
    queryKey: KEY.SIGNUP.EMAIL_DUPLICATE(variable),
    queryFn: async () => {
      return await signInApi.getEmailDuplicate(variable);
    },
    enabled: !!variable.email,
    retry: 1,
  });
};

export const usePostSignUpMutation = (
  useMutationOptions?: UseMutationOptions<HTTPResponse<SignUpRes> | BusinessErrorResponse, AxiosError, SignUpReq, unknown>,
) => {
  const mutationKey = ['SIGNUP_POST'];

  const result = useMutation({
    mutationKey,
    mutationFn: async (variable: SignUpReq) => {
      return await signInApi.postSignUp(variable);
    },
    ...useMutationOptions,
  });

  return { ...result, mutationKey };
};

export const usePostSignInMutation = (
  useMutationOptions?: UseMutationOptions<HTTPResponse<SignInRes> | BusinessErrorResponse, AxiosError, SignInReq, unknown>,
) => {
  const mutationKey = ['SIGNIN_POST'];

  const result = useMutation({
    mutationKey,
    mutationFn: async (variable: SignInReq) => {
      return await signInApi.postSignIn(variable);
    },
    ...useMutationOptions,
  });

  return { ...result, mutationKey };
};
