import React from 'react';
import { FormInput } from '@UI/molecules';
import { Box, Text } from '@UI/atoms';
import { useFormContext } from 'react-hook-form';

const SignInNickName: React.FC = () => {
  const { watch } = useFormContext();

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
      <FormInput
        maxLength={30}
        placeholder={'닉네임 입력'}
        registerName={'signIn.nickname'}
        isError={watch('signInError.nickname')}
        errorMsg={'닉네임은 1-10자의 문자, 숫자로 구성되어야합니다.'}
      />
    </Box>
  );
};

export default SignInNickName;
