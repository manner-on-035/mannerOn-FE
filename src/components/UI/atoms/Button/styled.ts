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
  $backGroundColor: string;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-style: normal;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height}px;
  ${({ theme }) => theme.fonts.CTA_medium};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ theme, $backGroundColor, disabled }) => {
    if ($backGroundColor === 'black' && disabled) {
      return theme.colors.darkgray;
    } else if ($backGroundColor === 'white' && disabled) {
      return theme.colors.gray20;
    } else if ($backGroundColor === 'black' && !disabled) {
      return theme.colors.primary;
    } else if ($backGroundColor === 'white' && !disabled) {
      return theme.colors.white;
    }
  }};

  color: ${({ theme, $backGroundColor, disabled }) => {
    if ($backGroundColor === 'black' && disabled) {
      return theme.colors.gray40;
    } else if ($backGroundColor === 'white' && disabled) {
      return theme.colors.gray30;
    } else if ($backGroundColor === 'white' && !disabled) {
      return theme.colors.darkgray;
    } else if ($backGroundColor === 'black' && !disabled) {
      return theme.colors.white;
    }
  }};

  border: ${({ theme, $backGroundColor, disabled }) => {
    if ($backGroundColor === 'white' && !disabled) {
      return `1px solid ${theme.colors.darkgray}`;
    } else if (disabled) {
      return `1px solid ${theme.colors.gray30}`;
    } else {
      return 'none';
    }
  }};

  &:hover {
    background-color: ${({ theme, $backGroundColor, disabled }) => {
      if ($backGroundColor === 'black' && !disabled) {
        return theme.colors.darkgray;
      } else if ($backGroundColor === 'white' && !disabled) {
        return theme.colors.gray20;
      }
    }};
  }
  &:active {
  }
`;
