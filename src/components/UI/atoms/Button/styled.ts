import styled from 'styled-components';

interface ButtonProps {
  color: string;
  width?: number;
  height: number;
  $fontSize: number;
  $marginTop?: number;
  $fontWeight?: number;
  $borderRadius: number;
  $marginLeft?: number;
  $marginBottom?: number;
  $backGroundColor?: string;
  $paddingTopBottom?: number;
  $paddingLeftRight?: number;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-style: normal;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: ${({ $fontSize }) => $fontSize}px;
  padding: ${({ $paddingTopBottom, $paddingLeftRight }) =>
    $paddingTopBottom && $paddingLeftRight
      ? `${$paddingTopBottom}px ${$paddingLeftRight}px`
      : $paddingTopBottom
        ? `${$paddingTopBottom}px 0`
        : `0 ${$paddingLeftRight}px`};
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  color: ${({ color, disabled }) => {
    if (disabled) {
    } else {
      if (color === '') {
        return '';
      }
    }
  }};
  background-color: ${({ $backGroundColor, disabled }) => {
    if (disabled) {
    } else {
      if ($backGroundColor) {
        return $backGroundColor;
      }
    }
  }};
  border: ${({ color, disabled }) => {
    if (color && !disabled) {
      return '';
    } else if (color === '') {
      return '';
    }
  }};

  &:hover {
  }
  &:active {
  }
`;
