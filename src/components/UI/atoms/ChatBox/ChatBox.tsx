import React from 'react';
import * as S from './styled';
import copyIcon 

export interface ChatBoxProps {
  isError?: boolean;
  backGroundColor?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  text?:string;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  isError,
  backGroundColor,
  onFocus,
}) => {
  return (
    <S.ChatBox
      $isError={isError}
      $backGroundColor={backGroundColor}
      onFocus={onFocus}
    >
      {text}
    <img src={copyIcon}></img>
    </S.ChatBox>
  );
};
export default ChatBox;
