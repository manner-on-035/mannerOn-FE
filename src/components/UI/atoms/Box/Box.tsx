import React from 'react';
import * as S from './styled';

export interface TextProps {
  width: number | 'auto';
  height: number | 'auto';
  color: string;
  display?: string;
  font: string;
  marginTop?: number;
  marginLeft?: number;
  textAlign?: string;
  children?: React.ReactNode;
}

const Box: React.FC<TextProps> = ({ width, height, color, display, font, marginTop, marginLeft, children, textAlign }) => {
  const style = {
    $width: width,
    $height: height,
    $color: color,
    $display: display,
    $font: font,
    $marginTo: marginTop,
    $marginLeft: marginLeft,
    $textAlign: textAlign,
  };
  return <S.Box {...style}>{children}</S.Box>;
};

export default Box;
