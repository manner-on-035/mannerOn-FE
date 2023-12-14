import styled from 'styled-components';

interface ButtonProps {
  $color?: string;
  width?: number;
  height: number;
  $margin?: string;
  $fontSize: number;
  $marginTop?: number;
  $fontWeight?: number;
  $borderRadius: number;
  $backgroundColor: string;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-style: normal;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height}px;
  margin: ${({ $margin }) => $margin};

  ${({ theme }) => theme.fonts.CTA_medium};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  color: ${({ theme, $color }) => theme.colors[`${$color}`]};
  background-color: ${({ theme, $backgroundColor }) => theme.colors[`${$backgroundColor}`]};

  border: ${({ theme, $backgroundColor, disabled }) => {
    if ($backgroundColor === 'white' && !disabled) {
      return `1px solid ${theme.colors.darkgray}`;
    } else if (disabled) {
      return `1px solid ${theme.colors.gray30}`;
    } else {
      return 'none';
    }
  }};

  &:hover {
    background-color: ${({ theme, $backgroundColor, disabled }) => {
      if ($backgroundColor === 'primary' && !disabled) {
        return theme.colors.darkgray;
      } else if ($backgroundColor === 'white' && !disabled) {
        return theme.colors.gray20;
      }
    }};
  }
  &:active {
  }
`;
