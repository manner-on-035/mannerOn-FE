import React from 'react';
import * as S from './styled';

export interface BoxProps {
  gap?: number;
  color?: string;
  margin?: string;
  padding?: string;
  display?: string;
  fontSize?: number;
  fontWeight?: number;
  textAlign?: string;
  borderRadius?: number;
  backgroundColor?: string;
  width?: number | 'auto';
  height?: number | string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
  margin,
  padding,
  display,
  gap = 0,
  textAlign,
  fontSize = 14,
  fontWeight = 400,
  width = 'auto',
  height = 'auto',
  color = 'gray60',
  borderRadius = 0,
  backgroundColor = 'white',
  children,
}) => {
  const style = {
    $gap: gap,
    $color: color,
    $width: width,
    $margin: margin,
    $height: height,
    $padding: padding,
    $display: display,
    $fontSize: fontSize,
    $fontWeight: fontWeight,
    $textAlign: textAlign,
    $borderRadius: borderRadius,
    $backgroundColor: backgroundColor,
  };
  return <S.Box {...style}>{children}</S.Box>;
};

export default Box;
