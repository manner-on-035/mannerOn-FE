import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import * as S from './styled';
import { Button } from '@UI/atoms';
import { FormInput } from '@UI/molecules';
import BlackMediumLogo from '@assets/logo/BlackMediumLogo.svg';
import { usePostSignInMutation } from '@apis/signInAPI/signInQuery';

const LoginPage = () => {
  const navigate = useNavigate();
  const { watch, getValues, setValue } = useFormContext();

  const { mutate: postSignIn } = usePostSignInMutation({
    onSuccess: (res) => {
      setValue('loginError.id', false);
      setValue('loginError.pw', false);
      navigate('/home');
    },
    onError: (err) => {
      setValue('loginError.id', true);
      setValue('loginError.pw', true);
    },
  });

  const handleLoginClick = () => {
    const { id, pw } = getValues('login');
    postSignIn({ email: id, password: pw });
  };

  useEffect(() => {
    setValue('login.id', '');
    setValue('login.pw', '');
  }, []);

  return (
    <S.Login>
      <S.WrapperTop>
        <S.ImgWrapper>
          <img src={BlackMediumLogo} alt="logo" />
        </S.ImgWrapper>
        <S.LoginTitle>
          안녕하세요.
          <br />
          <S.OrangeText>매너ON</S.OrangeText>입니다.
        </S.LoginTitle>
        <S.LoginSubTitle>회원 서비스 이용을 위해 로그인 해주세요.</S.LoginSubTitle>
      </S.WrapperTop>
      <S.WrapperCenter>
        <FormInput
          placeholder={'아이디 (이메일)'}
          isError={watch('loginError.id')}
          errorMsg={'존재하지 않는 사용자입니다.'}
          registerName={'login.id'}
        />
        <FormInput
          type={'password'}
          placeholder={'최소 6자리 이상, 대문자, 특수문자 포함'}
          registerName={'login.pw'}
          isError={watch('loginError.pw')}
          errorMsg={'비밀번호를 다시 입력해주세요.'}
        />
        <Button backgroundColor={'primary'} onClick={handleLoginClick}>
          로그인
        </Button>
      </S.WrapperCenter>
      <S.JoinText>
        아직 회원이 아니신가요?&nbsp;&nbsp;<S.UnderlineText onClick={() => navigate('/signIn-step')}>회원가입</S.UnderlineText>
      </S.JoinText>
    </S.Login>
  );
};

export default LoginPage;
