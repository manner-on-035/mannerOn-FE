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
  font-size: ${({ $fontSize }) => $fontSize}px;
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  background-color: ${({ $backGroundColor }) => ''}};
  &::placeholder {
  }
  &:focus {
    border: ${({ $isError, $borderColorOnFocus }) => {
      if ($isError) {
        return '';
      } else if ($borderColorOnFocus) {
        return '';
      }
    }};
  }
  &:disabled {
  }
`;
