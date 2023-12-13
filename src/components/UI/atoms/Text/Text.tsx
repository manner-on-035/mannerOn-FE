import React from 'react';
import * as S from './styled';

export interface TextProps {
  color?: string;
  margin?: string;
  display?: string;
  padding?: string;
  textAlign?: string;
  fontSize?: number;
  fontWeight?: number;
  width?: number | 'auto';
  height?: number | 'auto';
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  display,
  margin,
  padding,
  children,
  textAlign,
  fontSize = 14,
  fontWeight = 400,
  width = 'auto',
  height = 'auto',
  color = 'darkgray',
}) => {
  const style = {
    $color: color,
    $width: width,
    $height: height,
    $margin: margin,
    $display: display,
    $padding: padding,
    $textAlign: textAlign,
    $fontSize: fontSize,
    $fontWeight: fontWeight,
  };
  return <S.Text {...style}>{children}</S.Text>;
};

export default Text;
