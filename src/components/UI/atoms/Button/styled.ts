import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  width?: number;
  height: number;
  $fontSize: number;
  $marginTop?: number;
  $fontWeight?: number;
  $borderRadius: number;
  $marginLeft?: number;
  $marginBottom?: number;
  $backGroundColor?: string;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-style: normal;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height}px;
  ${({theme}) => theme.fonts.CTA_medium};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: 
  ${({ theme, $backGroundColor, disabled }) => {
    if (disabled) {
      return theme.colors.gray30
    } else if ($backGroundColor === 'white') {
      return theme.colors.darkgrey;
    }else if ($backGroundColor === 'black') {
      return theme.colors.white;
    }
    }
  }
};
  background-color: ${({ theme, $backGroundColor, disabled }) => {
    if (disabled) {
      return "gray";
    } else if($backGroundColor === "black"){
      return theme.colors.primary;
    }else if($backGroundColor = "white"){
      return theme.colors.white;
    }
  }};
  }};
  border: ${({ theme, $backGroundColor, disabled }) => {
    if ($backGroundColor === "black" && !disabled) {
      return 'black';
    } else if ($backGroundColor === "white" && !disabled) {
      return theme.colors.darkgrey;
    }
  }};

  &:hover {
  }
  &:active {
  }
`;
