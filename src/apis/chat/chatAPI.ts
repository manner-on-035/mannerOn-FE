import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import { ChatStartReq, ChatReq, ChatRes } from '../../types/chat';
import { API_URL } from '@shared/index';
import Api from '../Api';

export default class ChatInApi extends Api {
  constructor() {
    super();
  }

  public postChatStart(variable: ChatStartReq): Promise<HTTPResponse<ChatRes> | BusinessErrorResponse> {
    return this.post<ChatRes, ChatStartReq>({
      url: API_URL.CHAT.CHAT_START,
      data: variable,
    });
  }

  public postChat(variable: ChatReq): Promise<HTTPResponse<ChatRes> | BusinessErrorResponse> {
    return this.post<ChatRes, { category: string; chat: string }>({
      url: API_URL.CHAT.CHAT(variable?.chatroomId),
      data: { category: variable?.category, chat: variable?.chat },
    });
  }


}
