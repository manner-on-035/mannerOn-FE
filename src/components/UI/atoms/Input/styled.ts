import styled from 'styled-components';

interface InputProps {
  width: number;
  height: number;
  $margin?: string;
  $fontSize: number;
  $isError?: boolean;
  $borderColor?: string;
  $borderRadius: number;
  $backGroundColor?: string;
  $borderColorOnFocus?: string;
}
export const Input = styled.input<InputProps>`
  padding-left: 16px;
  border: 1px solid;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: ${({ $margin }) => $margin};
  border-color: ${({ theme, $borderColor }) => {
    if ($borderColor) return theme.colors[`${$borderColor}`];
    else return theme.colors.gray30;
  }};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background-color: ${({ theme, disabled, $backGroundColor }) => {
    if (disabled) return theme.colors.gray30;
    else return theme.colors[`${$backGroundColor}`];
  }};

  &::placeholder {
    ${({ theme }) => theme.fonts.body2};
    color: ${({ theme, disabled }) => {
      if (disabled) {
        return theme.colors.gray40;
      } else {
        return theme.colors.gray50;
      }
    }};
  }
  &:focus {
    outline: none;
    border: ${({ $isError, $borderColorOnFocus, theme }) => {
      if ($isError) {
        return `1px solid ${theme.colors.negative}`;
      } else if ($borderColorOnFocus) {
        return `1px solid ${theme.colors[`${$borderColorOnFocus}`]}`;
      } else return `1px solid ${theme.colors.gray30}`;
    }};
  }
  &:disabled {
  }
`;
