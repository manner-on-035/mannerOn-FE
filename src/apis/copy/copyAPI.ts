import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import { IconRes } from '../../types/feedback';
import { API_URL } from '@shared/index';
import Api from '../Api';

export default class copyApi extends Api {
  constructor() {
    super();
  }

  public putCopyMessage(chatId: number): Promise<HTTPResponse<IconRes> | BusinessErrorResponse> {
    return this.put<IconRes>({
      url: API_URL.COPY.COPY(chatId),
    });
  }
}
