import styled from 'styled-components';

interface SvgWrapperProps {
  width: number;
  height: number;
  svg: any;
}

export const SvgWrapper = styled.div<SvgWrapperProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-image: url(${({ svg }) => svg});
  background-repeat: no-repeat;
  background-position: center center;
`;
