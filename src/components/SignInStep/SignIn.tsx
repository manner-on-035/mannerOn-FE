import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@UI/atoms';
import { FormInput } from '@UI/molecules';
import { useFormContext } from 'react-hook-form';

interface SignInProps {
  onClickConfirmButton?: React.MouseEventHandler<HTMLButtonElement>;
}

const SignIn: React.FC<SignInProps> = ({ onClickConfirmButton }) => {
  const navigate = useNavigate();
  const { watch } = useFormContext();

  return (
    <Box display={'flexDAC'} gap={24} margin={'40px 0 0 0'}>
      <FormInput
        title={'아이디'}
        placeholder={'아이디 (이메일)'}
        isError={watch('signInError.id')}
        errorMsg={watch('signInError.id.message')}
        registerName={'signIn.id'}
      />
      <FormInput
        type={'password'}
        title={'비밀번호'}
        placeholder={'최소 6자리 이상, 대문자, 특수문자 포함'}
        registerName={'signIn.pw'}
        isError={watch('signInError.pw')}
        errorMsg={'8~15자리 영어, 숫자, 특수문자로 구성되어야 합니다.'}
      />
      <FormInput
        type={'password'}
        title={'비밀번호 확인'}
        registerName={'signIn.pwConfirm'}
        isError={watch('signInError.pwConfirm')}
        errorMsg={'비밀번호가 일치하지 않습니다.'}
      />
      <Box display={'flexDAC'} gap={8}>
        <Button backgroundColor={'primary'} margin={'24px 0 0 0'} onClick={onClickConfirmButton}>
          확인
        </Button>
        <Button color={'darkgray'} onClick={() => navigate('/')}>
          취소
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
