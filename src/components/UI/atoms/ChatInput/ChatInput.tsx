import React from 'react';
import * as S from './styled';
export interface ChatInputProps {
  width: number;
  height: number;
  fontSize?: number;
  isError?: boolean;
  borderRadius: number;
  placeholder?: string;
  backGroundColor?: string;
  borderColorOnFocus?: string;
  value?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const ChatInput: React.FC<ChatInputProps> = ({
  width,
  height,
  isError,
  placeholder,
  borderRadius,
  backGroundColor,
  borderColorOnFocus,
  fontSize = 18,
  value,
  maxLength,
  onChange,
  onFocus,
}) => {
  return (
    <S.ChatInput
      width={width}
      height={height}
      $isError={isError}
      $fontSize={fontSize}
      placeholder={placeholder}
      $borderRadius={borderRadius}
      $backGroundColor={backGroundColor}
      $borderColorOnFocus={borderColorOnFocus}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};
export default ChatInput;
