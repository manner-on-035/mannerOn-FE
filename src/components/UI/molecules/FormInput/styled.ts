import styled from 'styled-components';

interface InputContainerProps {
  width: number;
  height: number;
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
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
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
  color: var(--textBlack);
`;

export const ErrMsg = styled.div<MsgProps>`
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
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
  color: var(--error);
  white-space: pre-wrap;
`;

export const ConfirmMsg = styled.div<MsgProps>`
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ $msgFontSize }) => $msgFontSize}px;
  line-height: ${({ $msgFontSize }) => {
    if ($msgFontSize === 14) {
      return '20';
    } else {
      return '24';
    }
  }}px;
  display: flex;
  align-items: center;
  color: var(--confirm);
  white-space: pre-wrap;
`;
