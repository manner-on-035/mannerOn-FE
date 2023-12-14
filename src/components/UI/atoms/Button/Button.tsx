import React from 'react';
import * as S from './styled';

export interface ButtonProps {
  color?: string;
  width?: number;
  height?: number;
  margin?: string;
  fontSize?: number;
  disabled?: boolean;
  borderRadius?: number;
  backgroundColor: string;
  children: React.ReactElement | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  margin,
  color = 'white',
  width = 328,
  height = 52,
  disabled = false,
  borderRadius = 4,
  fontSize = 16,
  backgroundColor,
  children,
  onClick,
}) => {
  return (
    <S.Button
      $color={color}
      width={width}
      $margin={margin}
      height={height}
      disabled={disabled}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $backgroundColor={backgroundColor}
      onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
