import React from 'react';
import ReactDOMServer from 'react-dom/server';
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
  text?: string | undefined;
}


const ChatBox: React.FC<ChatBoxProps> = ({ role, isError, onFocus, children }) => {
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
        {role === 'ai' && <ChatIcons text={childrenString} />}
      </S.ChatBox>
    </>
  );
};
export default ChatBox;
