import React from 'react';
import { Box, Text, Input } from '@UI/atoms';

interface SignInNickNameProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SignInNickName: React.FC<SignInNickNameProps> = ({ onChange }) => {
  return (
    <Box fontWeight={500}>
      <Box fontSize={24} fontWeight={700}>
        매너ON에서 사용할
        <br />
        <Text fontSize={24} fontWeight={700} color={'secondary'}>
          닉네임
        </Text>
        을 입력해 주세요
      </Box>
      <Box fontSize={16} color={'gray50'} margin={'8px 0 40px 0'}>
        닉네임은 공백없이 10자 이하,
        <br />
        특수문자는 제외해주세요.
      </Box>
      <Input placeholder={'닉네임 입력'} maxLength={30} onChange={onChange} />
    </Box>
  );
};

export default SignInNickName;
