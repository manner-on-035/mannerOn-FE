import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { KEY } from '@shared/index';
import { IconRes } from '../../types/feedback';
import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import CopyApi from './copyAPI';

const copyApi = new CopyApi();

export const usePutCopytMutation = (
    chatroomId: number,
    useMutationOptions?: UseMutationOptions<HTTPResponse<IconRes> | BusinessErrorResponse, AxiosError, unknown>,
  ) => {
    const mutationKey = KEY.COPY.COPY_PUT;
    const result = useMutation({
      mutationKey,
      mutationFn: async () => {
        return await copyApi.putCopy(chatroomId);
      },
      ...useMutationOptions,
    });
    return { ...result, mutationKey };
  };