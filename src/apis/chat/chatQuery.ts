import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { KEY } from '@shared/index';
import { ChatStartReq, ChatReq, ChatRes } from '../../types/chat';
import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import ChatApi from './chatAPI';

const chatApi = new ChatApi();

export const usePostChatStartMutation = (
  useMutationOptions?: UseMutationOptions<HTTPResponse<ChatRes> | BusinessErrorResponse, AxiosError, ChatStartReq, unknown>,
) => {
  const mutationKey = KEY.CHAT.CHAT_START_POST;
  const result = useMutation({
    mutationKey,
    mutationFn: async (variable: ChatStartReq) => {
      return await chatApi.postChatStart(variable);
    },
    ...useMutationOptions,
  });
  return { ...result, mutationKey };
};

export const usePostChatMutation = (
  useMutationOptions?: UseMutationOptions<HTTPResponse<ChatRes> | BusinessErrorResponse, AxiosError, ChatReq, unknown>,
) => {
  const mutationKey = KEY.CHAT.CHAT_POST;
  const result = useMutation({
    mutationKey,
    mutationFn: async (variable: ChatReq) => {
      return await chatApi.postChat(variable);
    },
    ...useMutationOptions,
  });
  return { ...result, mutationKey };
};
