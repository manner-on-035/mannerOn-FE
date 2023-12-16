import React from 'react';
import * as S from './styled';
import { SvgWrapper } from '@UI/atoms';
import { ChatIcons } from '@UI/molecules/ChatIcons';
import profile from '@assets/logo/aiProfileLogo.svg';

export interface ChatBoxProps {
  role?: 'user' | 'ai';
  isError?: boolean;
  backGroundColor?: string;
  children?: React.ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const ChatBox: React.FC<ChatBoxProps> = ({ role = 'user', isError, onFocus, children }) => {
  return (
    <>
      {role === 'ai' && <SvgWrapper width={33} height={32} svg={profile} />}
      <S.ChatBox $isError={isError} $borderRadius={0} role={role} onFocus={onFocus}>
        {children}
        {role === 'ai' && <ChatIcons />}
      </S.ChatBox>
    </>
  );
};
export default ChatBox;
