export interface ChatStartReq {
  category: string;
  chat: string;
}

export interface ChatRes {
  message: string;
  statusCode: string;
  data: {
    chatroomId: number;
    chatId: number;
    content: string;
  };
}

export interface ChatReq {
  chatroomId: number;
  category: string;
  chat: string;
}
