import React, { ChangeEvent, useState } from 'react';
import { REGEX } from '@shared/index';
import { Container } from '@UI/template';
import { useFormContext } from 'react-hook-form';
import { Box, SvgWrapper, Button, Text } from '@UI/atoms';
import { SignIn, SignInNickName, SignInGender, SignInJob, SignInAge, SignInSuccess } from '@components/SignInStep';
import backIcon from '@assets/icon/backIcon.svg';
import closeIcon from '@assets/icon/closeIcon.svg';

// 임의의 API 성공 값
const isSignInSuccess = false;

const SignInStepPage: React.FC = () => {
  const { getValues, setValue } = useFormContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [currenNickName, setCurrentNickName] = useState<string>('');
  const [currentGender, setCurrentGender] = useState<number>(1);
  const [currentJob, setCurrentJob] = useState<number>(0);
  const [currentAge, setCurrentAge] = useState<number>(1);

  const handleClickConfirmButton = () => {
    const { id, pw, pwConfirm } = getValues('signIn');
    setValue('signInError.id', !REGEX.id.test(id));
    setValue('signInError.pw', !REGEX.pw.test(pw));
    setValue('signInError.pwConfirm', pw !== pwConfirm);

    if (!REGEX.id.test(id) || !REGEX.pw.test(pw) || pw !== pwConfirm) return;
    else return;
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => setCurrentNickName(e.target.value);
  const handleClickStepButton = () => {
    if (currentStep >= 4) {
      // api 호출
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const stepList = [
    <SignInNickName key={0} onChange={handleNicknameChange} />,
    <SignInGender key={1} current={currentGender} setCurrent={setCurrentGender} />,
    <SignInJob key={2} current={currentJob} setCurrent={setCurrentJob} />,
    <SignInAge key={3} current={currentAge} setCurrent={setCurrentAge} />,
  ];

  return (
    <Box height={'100vh'}>
      <Box height={50} display={isSignInSuccess ? 'flexEC' : 'flexAlignItemsCenter'}>
        <SvgWrapper
          svg={isSignInSuccess ? closeIcon : backIcon}
          onClick={() => setCurrentStep(currentStep - 1)}
          style={{ cursor: 'pointer' }}
        />
        {!currentStep && (
          <Text width={282} textAlign={'center'} fontWeight={700}>
            회원가입
          </Text>
        )}
      </Box>
      <Container>
        {!currentStep ? (
          <SignIn onClickConfirmButton={handleClickConfirmButton} />
        ) : (
          <>
            {isSignInSuccess ? (
              <SignInSuccess nickname={currenNickName} />
            ) : (
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
            )}
            <Button backgroundColor={'primary'} margin={'0 0 40px 0'} onClick={handleClickStepButton}>
              {isSignInSuccess ? '확인' : '다음'}
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
};

export default SignInStepPage;
