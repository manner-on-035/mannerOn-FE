import { SignUpEmailDuplicateReq } from '../types/signUp';

const KEY = {
  SIGNUP: {
    EMAIL_DUPLICATE: (variables: SignUpEmailDuplicateReq) => ['EMAIL_DUPLICATE', variables] as const,
  },
  CHAT: {
    CHAT_START_POST: ['CHAT_START_POST'],
    CHAT_POST: ['CHAT_POST'],
  },
  COPY: {
    COPY_PUT: ['COPY_PUT'],
  },
  FEEDBACK: {
    FEEDBACK_PUT: ['FEEDBACK_PUT'],
  }
};

export default KEY;
