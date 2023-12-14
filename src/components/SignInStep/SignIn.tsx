import React from 'react';
import { Box, Button } from '@UI/atoms';
import { FormInput } from '@UI/molecules';

interface SignInProps {}

const SignIn: React.FC<SignInProps> = ({}) => {
  return (
    <Box display={'flexDAC'} gap={24} margin={'40px 0 0 0'}>
      <FormInput title={'아이디'} placeholder={'아이디 (이메일)'} />
      <FormInput title={'비밀번호'} placeholder={'최소 6자리 이상, 대문자, 특수문자 포함'} />
      <FormInput title={'비밀번호 확인'} />
      <FormInput title={'생년월일'} placeholder={'앞 6자리 숫자 입력'} />
      <Box display={'flexDAC'} gap={8}>
        <Button backgroundColor={'primary'} margin={'24px 0 0 0'}>
          확인
        </Button>
        <Button color={'darkgray'}>취소</Button>
      </Box>
    </Box>
  );
};

export default SignIn;
