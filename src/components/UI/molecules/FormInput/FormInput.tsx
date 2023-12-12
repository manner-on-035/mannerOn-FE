import React from 'react';
import { Input } from '@components/UI/atoms';
import * as S from './styled';

export interface FormInputProps {
  width: number;
  value?: string;
  title?: string;
  fontSize?: number;
  isError?: boolean;
  errorMsg?: string;
  inputHeight: number;
  msgFontSize?: number;
  betweenSpace?: number;
  borderRadius: number;
  placeholder?: string;
  titleFontSize?: number;
  containerHeight: number;
  msgFontLineHeight?: number;
  borderColorOnFocus?: string;
  backGroundColor: string;
  maxLength?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<FormInputProps> = ({
  title,
  width,
  isError,
  errorMsg,
  fontSize,
  maxLength,
  inputHeight,
  placeholder,
  borderRadius,
  containerHeight,
  backGroundColor,
  borderColorOnFocus,
  betweenSpace = 0,
  msgFontSize = 14,
  titleFontSize = 16,
  msgFontLineHeight = 24,
  value,
  onFocus,
  onChange,
}) => {
  return (
    <S.InputContainer width={width} height={containerHeight} $betweenSpace={betweenSpace}>
      {title && <S.Title fontSize={titleFontSize}>{title}</S.Title>}
      <Input
        width={width}
        isError={isError}
        fontSize={fontSize}
        height={inputHeight}
        placeholder={placeholder}
        borderRadius={borderRadius}
        backGroundColor={backGroundColor}
        borderColorOnFocus={borderColorOnFocus}
        value={value}
        maxLength={maxLength}
        onFocus={onFocus}
        onChange={onChange}
      />
      {errorMsg && (
        <S.ErrMsg $msgFontSize={msgFontSize} $msgFontLineHeight={msgFontLineHeight}>
          {errorMsg}
        </S.ErrMsg>
      )}
    </S.InputContainer>
  );
};

export default FormInput;
