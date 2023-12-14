import styled from 'styled-components';
import {
  flexCC,
  flexEC,
  flexSBC,
  flexDAC,
  flexDJC,
  flexCW,
  flexJustifyCenter,
  flexFlexStartCenter,
  flexAlignItemsCenter,
} from '@styles/index';

interface BoxProps {
  $gap?: number;
  $color: string;
  $margin?: string;
  $padding?: string;
  $display?: string;
  $fontSize: number;
  $fontWeight: number;
  $textAlign?: string;
  $borderRadius: number;
  $backgroundColor: string;
  $width: number | 'auto';
  $height: number | string | 'auto';
}

export const Box = styled.div<BoxProps>`
  width: ${({ $width }) => ($width === 'auto' ? 'auto' : `${$width}px`)};
  height: ${({ $height }) => {
    if ($height === 'auto') return 'auto';
    else if (typeof $height === 'string') return $height;
    else return `${$height}px`;
  }};

  color: ${({ theme, $color }) => theme.colors[`${$color}`]};
  background-color: ${({ theme, $backgroundColor }) => theme.colors[`${$backgroundColor}`]};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;

  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};

  word-break: break-all;
  text-align: ${({ $textAlign }) => $textAlign};
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};

  ${({ $display }) => {
    if ($display === 'flexDJC') {
      return flexDJC;
    } else if ($display === 'flexDAC') {
      return flexDAC;
    } else if ($display === 'flexEC') {
      return flexEC;
    } else if ($display === 'flexSBC') {
      return flexSBC;
    } else if ($display === 'flexCC') {
      return flexCC;
    } else if ($display === 'flexJustifyCenter') {
      return flexJustifyCenter;
    } else if ($display === 'flexAlignItemsCenter') {
      return flexAlignItemsCenter;
    } else if ($display === 'flexAlignItemsCenter') {
      return flexAlignItemsCenter;
    } else if ($display === 'flexFlexStartCenter') {
      return flexFlexStartCenter;
    } else if ($display === 'flexCW') {
      return flexCW;
    }
  }};
  gap: ${({ $gap }) => $gap}px;
`;
