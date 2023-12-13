import styled from 'styled-components';

interface TextProps {
  $color: string;
  $margin?: string;
  $padding?: string;
  $display?: string;
  $textAlign?: string;
  $fontSize?: number;
  $fontWeight?: number;
  $width: number | 'auto';
  $height: number | 'auto';
}

export const Text = styled.p<TextProps>`
  display: inline;
  width: ${({ $width }) => ($width === 'auto' ? 'auto' : `${$width}px`)};
  height: ${({ $height }) => {
    if ($height === 'auto') return 'auto';
    else return `${$height}px`;
  }};

  word-break: break-all;
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ theme, $color }) => theme.colors[`${$color}`]};
  text-align: ${({ $textAlign }) => $textAlign};

  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
`;
