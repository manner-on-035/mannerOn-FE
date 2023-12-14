import React from 'react';
import { Box, Text, Button } from '@UI/atoms';

interface SignInJobProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const buttonList = ['직장인', '프리랜서', '학생', '주부', '공무원', '전문직', '자영업', '무직', '아르바이트생'];

const SignInJob: React.FC<SignInJobProps> = ({ current, setCurrent }) => {
  return (
    <Box fontWeight={500}>
      <Box fontSize={24} fontWeight={700} padding={'0 0 40px 0'}>
        <Text fontSize={24} fontWeight={700} color={'secondary'}>
          어떤 일
        </Text>
        을 하시나요?
      </Box>
      <Box display={'flexCW'} gap={8}>
        {buttonList.map((gender, i) => (
          <Button
            key={i}
            width={160}
            height={46}
            color={current === i ? 'white' : 'gray50'}
            backgroundColor={current === i ? 'secondary' : 'gray30'}
            onClick={() => setCurrent(i)}>
            {gender}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SignInJob;
