import { SignUpEmailDuplicateReq } from '../types/signUp';

const KEY = {
  SIGNUP: {
    EMAIL_DUPLICATE: (variables: SignUpEmailDuplicateReq) => ['EMAIL_DUPLICATE', variables] as const,
  },
  CHAT: {
    CHAT_START_POST: ['CHAT_START_POST'],
    CHAT_POST: ['CHAT_POST'],
  },
};

export default KEY;
