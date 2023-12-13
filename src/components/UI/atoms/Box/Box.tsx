import React from 'react';
import * as S from './styled';

export interface BoxProps {
  color?: string;
  padding?: string;
  display?: string;
  textAlign?: string;
  marginTop?: number;
  marginLeft?: number;
  borderRadius?: number;
  backgroundColor?: string;
  width: number | 'auto';
  height: number | string | 'auto';
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
  width,
  height,
  padding,
  display,
  textAlign,
  marginTop,
  marginLeft,
  color = 'gray60',
  borderRadius = 0,
  backgroundColor = 'white',
  children,
}) => {
  const style = {
    $color: color,
    $width: width,
    $height: height,
    $padding: padding,
    $display: display,
    $marginTo: marginTop,
    $textAlign: textAlign,
    $marginLeft: marginLeft,
    $borderRadius: borderRadius,
    $backgroundColor: backgroundColor,
  };
  return <S.Box {...style}>{children}</S.Box>;
};

export default Box;
