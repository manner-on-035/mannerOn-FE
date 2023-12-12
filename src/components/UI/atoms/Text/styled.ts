import styled from 'styled-components';

interface TextProps {
  $font: string;
  $color: string;
  $display?: string;
  $marginTop?: number;
  $marginLeft?: number;
  $textAlign?: string;
  $width: number | 'auto';
  $height: number | 'auto';
}

export const Text = styled.p<TextProps>`
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
