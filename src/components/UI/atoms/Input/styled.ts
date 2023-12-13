import styled from 'styled-components';
interface InputProps {
  width: number;
  height: number;
  $fontSize: number;
  $isError?: boolean;
  $borderRadius: number;
  $backGroundColor?: string;
  $borderColorOnFocus?: string;
}
export const Input = styled.input<InputProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding-left: 16px;
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.gray30};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background-color: ${({ theme, disabled }) => {
    if(disabled){
      return theme.colors.gray30;
    }else{ return theme.colors.white;}
  }}
  &::placeholder {
    ${({theme}) => theme.fonts.body2};
    color: ${({ theme, disabled }) => {
      if(disabled){
        return theme.colors.gray40;
      }else{ return theme.colors.gray50;}
    }
  }
  &:focus {
    border: ${({ $isError, $borderColorOnFocus, theme }) => {
      if ($isError) {
        return theme.colors.negative;
      } else if ($borderColorOnFocus) {
        return theme.colors.darkgrey;
      }
    }};
  }
  &:disabled {
  }
`;
