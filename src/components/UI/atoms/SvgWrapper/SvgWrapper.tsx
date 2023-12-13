import React from 'react';
import * as S from './styled';

interface SvgWrapperProps {
  svg: any;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SvgWrapper: React.FC<SvgWrapperProps> = ({ width = 24, height = 24, svg, onClick, style }) => {
  return <S.SvgWrapper svg={svg} style={style} width={width} height={height} onClick={onClick} />;
};

export default SvgWrapper;
