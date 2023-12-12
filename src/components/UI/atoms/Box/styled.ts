import styled from 'styled-components';

interface BoxProps {
  $font: string;
  $color: string;
  $display?: string;
  $marginTop?: number;
  $marginLeft?: number;
  $textAlign?: string;
  $width: number | 'auto';
  $height: number | 'auto';
}

export const Box = styled.div<BoxProps>`
  width: ${({ $width }) => ($width === 'auto' ? 'auto' : `${$width}px`)};
  height: ${({ $height }) => {
    if ($height === 'auto') {
      return 'auto';
    } else {
      return `${$height}px`;
    }
  }};
  word-break: break-all;
  color: ${({ $color }) => $color};
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-left: ${({ $marginLeft }) => $marginLeft}px;
  text-align: ${({ $textAlign }) => {
    return $textAlign;
  }};
`;
