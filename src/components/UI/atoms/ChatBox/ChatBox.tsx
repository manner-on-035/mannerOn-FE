import React from 'react';
import * as S from './styled';
import { useFormContext } from 'react-hook-form';
import {ChatIcons} from '@UI/molecules/ChatIcons';
import { SvgWrapper } from '@UI/atoms';
import profile from '@assets/logo/aiProfileLogo.svg'

export interface ChatBoxProps {
  role?: 'user' | 'ai';
  isError?: boolean;
  backGroundColor?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  role = 'ai',
  isError,
  onFocus,
  children,
}) => { 
  const { register } = useFormContext();
  
  return (
    <>
      {role === 'ai' &&
      <SvgWrapper width={32} height={32} style={{marginBottom: '15px'}} svg={profile} />}
      <S.ChatBox
        $isError={isError}
        $borderRadius={0}
        role={role}
        onFocus={onFocus}
      >
        {children}
        {role === 'ai' && <ChatIcons/>}
      </S.ChatBox>
    </>
  );
};
export default ChatBox;
