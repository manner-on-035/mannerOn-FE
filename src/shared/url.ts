const API_URL = {
  SIGNIN: {
    SIGNUP: '/api/users/signup' as const,
    SIGNIN: '/api/users/login' as const,
    EMAIL_DUPLICATE: 'api/users/check-email' as const,
  },
  CHAT: {
    CHAT_START: '/api/chats/start' as const,
    CHAT: (chatroomId: number) => `/api/chats/${chatroomId}` as const,
  },
  COPY: {
    COPY: (chatroomId: number) => `/api/chats/copy/${chatroomId}` as const,
  },
  FEEDBACK: {
    FEEDBACK: (chatroomId: number) => `/api/chats/feedback/${chatroomId}` as const,
  },
};

export default API_URL;
