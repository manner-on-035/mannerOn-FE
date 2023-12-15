import styled from 'styled-components';

interface ChatIconsProps {
    $isError?: boolean;
    isClicked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
  export const ChatIcons = styled.div<ChatIconsProps>`
    ${({theme}) => theme.fonts.body2_medium};
    padding:2px;
    display:flex;
    &:focus {
    }
    &:disabled {
    }
  `;

  export const StyledCopyIcon = styled.div<ChatIconsProps>`
    cursor:pointer;
  `;

  export const StyledLikeIcon = styled.div<ChatIconsProps>`
  cursor:pointer;
  `;

  export const StyledDislikeIcon = styled.div<ChatIconsProps>`
  cursor:pointer;
  `;