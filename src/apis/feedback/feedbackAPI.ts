import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import { FeedbackReq, IconRes } from '../../types/feedback';
import { API_URL } from '@shared/index';
import Api from '../Api';

export default class feedabckApi extends Api {
  constructor() {
    super();
  }

  public putFeedback(chatroomId: number, variable: FeedbackReq): Promise<HTTPResponse<IconRes> | BusinessErrorResponse> {
    return this.put<IconRes, FeedbackReq>({
      url: API_URL.FEEDBACK.FEEDBACK(chatroomId),
      data: variable,
    });
  }

}
   