import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { KEY } from '@shared/index';
import { FeedbackReq, IconRes } from '../../types/feedback';
import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import FeedbackApi from './feedbackAPI';

const feedbackApi = new FeedbackApi();

export const usePutFeedbackMutation = (
    chatId: number,
    useMutationOptions?: UseMutationOptions<HTTPResponse<IconRes> | BusinessErrorResponse, AxiosError, FeedbackReq, unknown>,
  ) => {
    const mutationKey = KEY.FEEDBACK.FEEDBACK_PUT;
    const result = useMutation({
      mutationKey,
      mutationFn: async (variable: FeedbackReq) => {
        return await feedbackApi.putFeedback(chatId, variable);
      },
      ...useMutationOptions,
    });
    return { ...result, mutationKey };
  };
