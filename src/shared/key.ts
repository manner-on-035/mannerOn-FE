import { SignUpEmailDuplicateReq } from '../types/signUp';

const KEY = {
  SIGNUP: {
    EMAIL_DUPLICATE: (variables: SignUpEmailDuplicateReq) => ['EMAIL_DUPLICATE', variables] as const,
  },
};

export default KEY;
