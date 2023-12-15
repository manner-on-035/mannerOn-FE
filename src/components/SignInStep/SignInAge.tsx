import React from 'react';
import { Box, Text, Button } from '@UI/atoms';

interface SignInAgeProps {
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

const buttonList = ['10대', '20-24세', '25-29세', '30-34세', '35세 이상'];

const SignInAge: React.FC<SignInAgeProps> = ({ current, setCurrent }) => {
  return (
    <Box fontWeight={500}>
      <Box fontSize={24} fontWeight={700} padding={'0 0 40px 0'}>
        <Text fontSize={24} fontWeight={700} color={'secondary'}>
          연령대
        </Text>
        를 선택해주세요!
      </Box>
      <Box display={'flexCW'} gap={8}>
        {buttonList.map((age, i) => (
          <Button
            key={i}
            width={160}
            height={46}
            color={current === age ? 'white' : 'gray50'}
            backgroundColor={current === age ? 'secondary' : 'gray30'}
            onClick={() => setCurrent(age)}>
            {age}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SignInAge;
