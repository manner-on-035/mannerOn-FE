import styled from 'styled-components';
import {
  flexCC,
  flexEC,
  flexSBC,
  flexDAC,
  flexDJC,
  flexJustifyCenter,
  flexFlexStartCenter,
  flexAlignItemsCenter,
} from '@styles/index';

interface BoxProps {
  $color: string;
  $padding?: string;
  $display?: string;
  $marginTop?: number;
  $marginLeft?: number;
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
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-left: ${({ $marginLeft }) => $marginLeft}px;

  word-break: break-all;
  text-align: ${({ $textAlign }) => {
    return $textAlign;
  }};

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
    }
  }}
`;
