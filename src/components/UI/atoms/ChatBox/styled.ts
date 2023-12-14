import styled from 'styled-components';
interface ChatBoxProps {
  $isError?: boolean;
  $borderRadius: number;
  $backGroundColor?: string;
  color?: string;
}
export const ChatBox = styled.div<ChatBoxProps>`
  ${({theme}) => theme.fonts.body2_medium};
  border-radius: 16px;
  background-color:${({ theme, $backGroundColor}) => {
    if($backGroundColor === "secondary"){
      return theme.colors.secondary;
    }else if($backGroundColor === "gray"){
      return theme.colors.gray20;
    }
  }};
  color:${({ theme, $backGroundColor}) => {
    if($backGroundColor === "secondary"){
      return theme.colors.white;
    }else if($backGroundColor === "gray"){
      return theme.colors.darkgrey;
    }
  }};

  &:focus {
  }
  &:disabled {
  }
`;