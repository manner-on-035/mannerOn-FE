import React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as S from './styled';
import { SvgWrapper } from '@UI/atoms';
import { ChatIcons } from '@UI/molecules/ChatIcons';
import profile from '@assets/logo/aiProfileLogo.svg';

export interface ChatBoxProps {
  isError?: boolean;
  role?: 'user' | 'ai';
  backGroundColor?: string;
  children?: React.ReactNode;
  text?: string | undefined;
  currentChatId?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const ChatBox: React.FC<ChatBoxProps> = ({ role, isError, children, currentChatId, onFocus }) => {
  let childrenString: string | undefined;
  if (typeof children === 'string') {
    childrenString = children;
  } else if (React.isValidElement(children)) {
    childrenString = ReactDOMServer.renderToStaticMarkup(children);
  } else {
    childrenString = undefined;
  }
  return (
    <>
      {role === 'ai' && <SvgWrapper width={33} height={32} svg={profile} />}
      <S.ChatBox $isError={isError} $borderRadius={0} role={role} onFocus={onFocus}>
        {children}
        {role === 'ai' && <ChatIcons currentChatId={currentChatId} text={childrenString} />}
      </S.ChatBox>
    </>
  );
};
export default ChatBox;
