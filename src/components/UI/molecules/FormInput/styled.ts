import styled from 'styled-components';

interface InputContainerProps {
  width: number | 'auto';
  height: number | 'auto';
  $betweenSpace: number;
}

interface MsgProps {
  $msgFontSize: number;
  $msgFontLineHeight: number;
}

interface TitleProps {
  fontSize: number;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${({ width }) => (width === 'auto' ? 'auto' : `${width}px`)};
  height: ${({ height }) => (height === 'auto' ? 'auto' : `${height}px`)}px;
  & + & {
    margin-top: ${({ $betweenSpace }) => $betweenSpace}px;
  }
`;

export const Title = styled.div<TitleProps>`
  margin-bottom: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ fontSize }) => {
    if (fontSize === 16) {
      return '24';
    } else {
      return '30';
    }
  }}px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkgray};
`;

export const ErrMsg = styled.div<MsgProps>`
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.negative};
  font-size: ${({ $msgFontSize }) => $msgFontSize}px;
  line-height: ${({ $msgFontSize, $msgFontLineHeight }) => {
    if ($msgFontSize === 14) {
      return '20';
    } else if ($msgFontSize === 15 || $msgFontSize === 16) {
      return '24';
    } else {
      return $msgFontLineHeight;
    }
  }}px;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`;
