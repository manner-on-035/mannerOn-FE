import React from 'react';
import * as S from './styled';

export interface ButtonProps {
  color: string;
  width?: number;
  height: number;
  fontSize?: number;
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  fontWeight?: number;
  borderRadius: number;
  backGroundColor?: string;
  paddingTopBottom?: number;
  paddingLeftRight?: number;
  disabled?: boolean;
  children: React.ReactElement | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  color,
  width,
  height,
  disabled,
  marginTop,
  marginLeft,
  fontWeight,
  marginBottom,
  borderRadius,
  backGroundColor,
  paddingTopBottom,
  paddingLeftRight,
  fontSize = 16,
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
      $marginTop={marginTop}
      $fontWeight={fontWeight}
      $marginLeft={marginLeft}
      $borderRadius={borderRadius}
      $marginBottom={marginBottom}
      $backGroundColor={backGroundColor}
      $paddingTopBottom={paddingTopBottom}
      $paddingLeftRight={paddingLeftRight}
      onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
