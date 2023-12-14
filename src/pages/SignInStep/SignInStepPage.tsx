import React, { useState } from 'react';
import { Container } from '@UI/template';
import { Box, SvgWrapper, Button } from '@UI/atoms';
import { SignInNickName, SignInGender, SignInJob, SignInAge } from '@components/SignInStep';
import backIcon from '@assets/icon/backIcon.svg';

const SignInStepPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // TODO: 객체화
  const [currentGender, setCurrentGender] = useState<number>(1);
  const [currentJob, setCurrentJob] = useState<number>(0);
  const [currentAge, setCurrentAge] = useState<number>(1);

  const handleNicknameChange = () => {};

  const stepList = [
    <SignInNickName key={0} onChange={handleNicknameChange} />,
    <SignInGender key={1} current={currentGender} setCurrent={setCurrentGender} />,
    <SignInJob key={2} current={currentJob} setCurrent={setCurrentJob} />,
    <SignInAge key={3} current={currentAge} setCurrent={setCurrentAge} />,
  ];

  return (
    <Box height={'100vh'}>
      <Box height={50} display={'flexAlignItemsCenter'}>
        <SvgWrapper svg={backIcon} onClick={() => setCurrentStep(currentStep - 1)} style={{ cursor: 'pointer' }} />
      </Box>
      <Container>
        <Box>
          <Box padding={'20px 0 40px 0'} display={'flexAlignItemsCenter'} gap={6}>
            {[1, 2, 3, 4].map((item) => (
              <Box
                key={item}
                width={24}
                height={24}
                color={'white'}
                borderRadius={50}
                display={'flexCC'}
                backgroundColor={currentStep === item ? 'secondary' : 'gray30'}
                fontWeight={600}>
                {item}
              </Box>
            ))}
          </Box>
          {stepList.filter((_, i) => i + 1 === currentStep)}
        </Box>
        <Button backgroundColor={'primary'} margin={'0 0 40px 0'} onClick={() => setCurrentStep(currentStep + 1)}>
          다음
        </Button>
      </Container>
    </Box>
  );
};

export default SignInStepPage;
