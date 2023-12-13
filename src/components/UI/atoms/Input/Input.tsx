import React from 'react';
import * as S from './styled';
export interface InputProps {
  width?: number;
  height?: number;
  fontSize?: number;
  isError?: boolean;
  borderRadius?: number;
  placeholder?: string;
  backGroundColor?: string;
  borderColorOnFocus?: string;
  value?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  width = 328,
  height = 48,
  isError = false,
  placeholder,
  borderRadius = 4,
  backGroundColor = "white",
  borderColorOnFocus = "gray",
  fontSize = 14,
  value,
  maxLength,
  onChange,
  onFocus,
}) => {
  return (
    <S.Input
      width={width}
      height={height}
      $isError={isError}
      placeholder={placeholder}
      $borderRadius={borderRadius}
      $backGroundColor={backGroundColor}
      $borderColorOnFocus={borderColorOnFocus}
      value={value}
      maxLength={maxLength}
      $fontSize={0}
      onChange={onChange}
      onFocus={onFocus}

    />
  );
};
export default Input;
