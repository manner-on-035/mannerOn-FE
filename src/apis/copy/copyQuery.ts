import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { KEY } from '@shared/index';
import { IconRes, IconReq } from '../../types/feedback';
import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import CopyApi from './copyAPI';

const copyApi = new CopyApi();

export const usePutCopyMessageMutation = (
  useMutationOptions?: UseMutationOptions<HTTPResponse<IconRes> | BusinessErrorResponse, AxiosError, IconReq, unknown>,
) => {
  const mutationKey = KEY.COPY.COPY_PUT;
  const result = useMutation({
    mutationKey,
    mutationFn: async (params: IconReq) => {
      return await copyApi.putCopyMessage(params?.chatId);
    },
    ...useMutationOptions,
  });
  return { ...result, mutationKey };
};
