import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import { FeedbackReq, IconRes } from '../../types/feedback';
import { API_URL } from '@shared/index';
import Api from '../Api';

export default class feedbackApi extends Api {
  constructor() {
    super();
  }

  public putFeedback(chatId: number, variable: FeedbackReq= {feedback:0}): Promise<HTTPResponse<IconRes> | BusinessErrorResponse> {
    
    return this.put<IconRes, FeedbackReq>({
      url: API_URL.FEEDBACK.FEEDBACK(chatId),
      data: variable,
    });
  }

}