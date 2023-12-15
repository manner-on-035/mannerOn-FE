import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { REGEX } from '@shared/index';
import { Container } from '@UI/template';
import backIcon from '@assets/icon/backIcon.svg';
import closeIcon from '@assets/icon/closeIcon.svg';
import { Box, SvgWrapper, Button, Text } from '@UI/atoms';
import { SignIn, SignInNickName, SignInGender, SignInJob, SignInAge, SignInSuccess } from '@components/SignInStep';
import { usePostSignUpMutation, useGetEmailDuplicateQuery } from '@apis/signInAPI/signInQuery';

const SignInStepPage: React.FC = () => {
  const navigate = useNavigate();
  const { getValues, setValue } = useFormContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentGender, setCurrentGender] = useState<string>('여성');
  const [currentJob, setCurrentJob] = useState<string>('직장인');
  const [currentAge, setCurrentAge] = useState<string>('20-24세');
  const [isGetEmailData, setIsGetEmailData] = useState<boolean>(false);
  const [isSignInSuccess, setIsSignInSuccess] = useState<boolean>(false);

  const {
    data: emailDuplicateData,
    refetch: emailDuplicateRefetch,
    error: emailError,
  } = useGetEmailDuplicateQuery({
    email: currentEmail,
  });

  const { mutate: postSignUp } = usePostSignUpMutation({
    onSuccess: () => setIsSignInSuccess(true),
    onError: (err) => {
      // 에러 alert 출력
    },
  });

  const handleClickConfirmButton = () => {
    setIsGetEmailData(false);
    const { id, pw, pwConfirm } = getValues('signIn');
    setValue('signInError.pw', !REGEX.pw.test(pw));
    setValue('signInError.pwConfirm', pw !== pwConfirm);

    if (!REGEX.id.test(id)) {
      setValue('signInError.id', !REGEX.id.test(id));
      setValue('signInError.id.message', '이메일 형식이 올바르지 않습니다.');
      return;
    }
    setCurrentEmail(id);

    if (!REGEX.pw.test(pw) || pw !== pwConfirm) return;
    else if (!!currentEmail) emailDuplicateRefetch();
  };

  const handleClickNextStepButton = () => {
    if (isSignInSuccess) {
      navigate('/home');
      return;
    }
    const { nickname, id, pw, pwConfirm } = getValues('signIn');
    setValue('signInError.nickname', !REGEX.nickname.test(nickname));
    if (currentStep === 1 && !REGEX.nickname.test(nickname)) return;

    if (currentStep >= 4) {
      postSignUp({
        email: id,
        password: pw,
        checkPassword: pwConfirm,
        nickname,
        gender: currentGender,
        job: currentJob,
        ageRange: currentAge,
      });
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    if (emailError) setValue('signInError.id.message', '중복된 이메일입니다.');
    else if (emailDuplicateData) {
      setValue('signInError.id', false);
      setIsGetEmailData(true);
    }
  }, [emailDuplicateData, isGetEmailData, emailError]);

  useEffect(() => {
    const signInData = getValues('signIn');
    if (signInData) {
      const { pw, pwConfirm } = signInData;
      if (isGetEmailData && !currentStep && pw === pwConfirm && pw && pwConfirm) {
        setCurrentStep(currentStep + 1);
        setIsGetEmailData(false);
      }
    }
  }, [isGetEmailData]);

  const stepList = [
    <SignInNickName key={0} />,
    <SignInGender key={1} current={currentGender} setCurrent={setCurrentGender} />,
    <SignInJob key={2} current={currentJob} setCurrent={setCurrentJob} />,
    <SignInAge key={3} current={currentAge} setCurrent={setCurrentAge} />,
  ];

  return (
    <Box height={'100vh'}>
      <Box height={50} display={isSignInSuccess ? 'flexEC' : 'flexAlignItemsCenter'}>
        <SvgWrapper
          svg={isSignInSuccess ? closeIcon : backIcon}
          onClick={() => {
            if (!currentStep) navigate('/');
            else if (isSignInSuccess) navigate('/home');
            else setCurrentStep(currentStep - 1);
          }}
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
              <SignInSuccess nickname={getValues('signIn.nickname')} />
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
            <Button backgroundColor={'primary'} margin={'0 0 40px 0'} onClick={handleClickNextStepButton}>
              {isSignInSuccess ? '확인' : '다음'}
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
};

export default SignInStepPage;
