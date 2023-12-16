import React from 'react';
import * as S from './styled';
import { useFormContext } from 'react-hook-form';

export interface InputProps {
  width?: number;
  height?: number;
  margin?: string;
  fontSize?: number;
  isError?: boolean;
  borderRadius?: number;
  borderColor?: string;
  placeholder?: string;
  backGroundColor?: string;
  borderColorOnFocus?: string;
  registerName?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  children?: React.ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  margin,
  width = 328,
  height = 48,
  borderColor,
  isError = false,
  borderRadius = 4,
  borderColorOnFocus,
  backGroundColor = 'white',
  value,
  disabled,
  maxLength,
  placeholder,
  type = 'text',
  registerName,
  onFocus,
  onChange,
  onKeyDown,
}) => {
  const { register } = useFormContext();

  return (
    <S.Input
      $fontSize={0}
      width={width}
      height={height}
      $margin={margin}
      $isError={isError}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $backGroundColor={backGroundColor}
      $borderColorOnFocus={borderColorOnFocus}
      type={type}
      value={value}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      {...(registerName && register(registerName))}
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
export default Input;
