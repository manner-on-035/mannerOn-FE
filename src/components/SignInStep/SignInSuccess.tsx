import React from 'react';
import { Box, Text, SvgWrapper } from '@UI/atoms';
import celebrationIcon from '@assets/icon/celebrationIcon.svg';

interface SignInSuccessProps {
  nickname: string;
}

const SignInSuccess: React.FC<SignInSuccessProps> = ({ nickname }) => {
  return (
    <Box>
      <Box padding={'40px 0 24px 0'}>
        <SvgWrapper width={57} height={52} svg={celebrationIcon} />
      </Box>
      <Box fontSize={24} fontWeight={700} padding={'0 0 40px 0'}>
        <Text fontSize={24} fontWeight={700} color={'secondary'}>
          {nickname}
        </Text>
        님,
        <br />
        회원가입을 축하드립니다.
      </Box>
    </Box>
  );
};

export default SignInSuccess;
