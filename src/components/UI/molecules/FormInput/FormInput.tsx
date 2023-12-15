import React from 'react';
import { Input } from '@components/UI/atoms';
import * as S from './styled';

export interface FormInputProps {
  value?: string;
  title?: string;
  fontSize?: number;
  isError?: boolean;
  errorMsg?: string;
  inputHeight?: number;
  msgFontSize?: number;
  betweenSpace?: number;
  borderRadius?: number;
  placeholder?: string;
  titleFontSize?: number;
  backGroundColor?: string;
  borderColorOnFocus?: string;
  width?: number | 'auto';
  containerHeight?: number | 'auto';
  msgFontLineHeight?: number;
  type?: string;
  maxLength?: number;
  registerName?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<FormInputProps> = ({
  isError,
  errorMsg,
  fontSize,
  maxLength,
  placeholder,
  borderColorOnFocus,
  width = 'auto',
  inputHeight = 48,
  borderRadius = 4,
  betweenSpace = 0,
  msgFontSize = 14,
  titleFontSize = 16,
  msgFontLineHeight = 24,
  containerHeight = 'auto',
  backGroundColor = 'white',
  title,
  value,
  type,
  registerName,
  onFocus,
  onChange,
}) => {
  return (
    <S.InputContainer width={width} height={containerHeight} $betweenSpace={betweenSpace}>
      {title && <S.Title fontSize={titleFontSize}>{title}</S.Title>}
      <Input
        isError={isError}
        fontSize={fontSize}
        height={inputHeight}
        placeholder={placeholder}
        borderRadius={borderRadius}
        backGroundColor={backGroundColor}
        borderColorOnFocus={borderColorOnFocus}
        value={value}
        maxLength={maxLength}
        registerName={registerName}
        onFocus={onFocus}
        onChange={onChange}
        type={type}
      />
      {isError && (
        <S.ErrMsg $msgFontSize={msgFontSize} $msgFontLineHeight={msgFontLineHeight}>
          {errorMsg}
        </S.ErrMsg>
      )}
    </S.InputContainer>
  );
};

export default FormInput;
