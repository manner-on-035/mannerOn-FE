import React from 'react';
import * as S from './styled';

export interface ButtonProps {
  color?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  borderRadius?: number;
  disabled?: boolean;
  children: React.ReactElement | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  $backGroundColor?: string;

}

const Button: React.FC<ButtonProps> = ({
  color = "white",
  width = 328,
  height = 52,
  disabled = false,
  borderRadius = 4,
  fontSize = 16,
  $backGroundColor,
  children,
  onClick,

}) => {
  return (
    <S.Button
    color={color}
    width={width}
    height={height}
    disabled={disabled}
    $fontSize={fontSize}
    $borderRadius={borderRadius}
    $backGroundColor={$backGroundColor}
      >
      {children}
    </S.Button>
  );
};

export default Button;
