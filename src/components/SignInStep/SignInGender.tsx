import React from 'react';
import { Box, Text, Button } from '@UI/atoms';

interface SignInGenderProps {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

const buttonList = ['남성', '여성'];

const SignInGender: React.FC<SignInGenderProps> = ({ current, setCurrent }) => {
  return (
    <Box fontWeight={500}>
      <Box fontSize={24} fontWeight={700} padding={'0 0 40px 0'}>
        <Text fontSize={24} fontWeight={700} color={'secondary'}>
          성별
        </Text>
        을 입력해주세요
      </Box>
      <Box display={'flexCC'} gap={6}>
        {buttonList.map((gender, i) => (
          <Button
            key={i}
            height={46}
            margin={'0 0 40px 0'}
            color={current === gender ? 'white' : 'gray50'}
            backgroundColor={current === gender ? 'secondary' : 'gray30'}
            onClick={() => setCurrent(gender)}>
            {gender}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SignInGender;
