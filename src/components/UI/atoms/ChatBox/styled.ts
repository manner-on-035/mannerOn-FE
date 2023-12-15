import styled from 'styled-components';
interface ChatBoxProps {
  $isError?: boolean;
  $borderRadius: number;
  $backGroundColor?: string;
  color?: string;
  role?: 'user' | 'ai';
}
export const ChatBox = styled.div<ChatBoxProps>`
  ${({theme}) => theme.fonts.body2_medium};
  max-width: 280px;
  border-radius: 16px;
  background-color:${({ theme, role}) => {
    return role === 'ai'? theme.colors.gray20 : theme.colors.secondary
  }};
  color:${({ theme, role}) => {
    return role === 'ai'? theme.colors.darkgrey : theme.colors.white
  }};
  padding:16px;
  margin: ${({ role }) => role === 'ai' ? '0 auto 0 0' : '0 0 0 auto'};

  transition: all 0.2s ease;

  &:focus {
  }
  &:disabled {
  }
`;