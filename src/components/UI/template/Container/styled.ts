import styled from 'styled-components';
import { flexDAC, flexDSB } from '@styles/index';

interface ContainerProps {
  $display: string;
}

export const Container = styled.div<ContainerProps>`
  width: auto;
  height: calc(100vh - 50px);
  ${({ $display }) => {
    if ($display === 'flexDSB') {
      return flexDSB;
    } else if ($display === 'flexDAC') {
      return flexDAC;
    }
  }};
`;
