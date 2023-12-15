import React from 'react';
import * as S from './styled';
import { useFormContext } from 'react-hook-form';

export interface ChatBoxProps {
  isError?: boolean;
  backGroundColor?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  isError,
  backGroundColor,
  onFocus,
  children,
}) => { 
  const { register } = useFormContext();

  return (
    <S.ChatBox
      $isError={isError}
      $borderRadius={0}
      $backGroundColor={backGroundColor}
      onFocus={onFocus}
    >
      {children}
    {/* <img src={copyIcon}></img> */}
    </S.ChatBox>
  );
};
export default ChatBox;
