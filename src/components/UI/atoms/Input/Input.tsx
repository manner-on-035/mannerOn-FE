import React from 'react';
import * as S from './styled';
export interface InputProps {
  width: number;
  height: number;
  fontSize?: number;
  isError?: boolean;
  borderRadius: number;
  placeholder?: string;
  backGroundColor?: string;
  borderColorOnFocus?: boolean;
}
const Input: React.FC<InputProps> = ({
  width,
  height,
  isError,
  placeholder,
  borderRadius,
  backGroundColor,
  borderColorOnFocus,
  fontSize = 18,
}) => {
  return (
    <S.Input
      width={width}
      height={height}
      $isError={isError}
      $fontSize={fontSize}
      placeholder={placeholder}
      $borderRadius={borderRadius}
      $backGroundColor={backGroundColor}
      $borderColorOnFocus={borderColorOnFocus}
    />
  );
};
export default Input;
