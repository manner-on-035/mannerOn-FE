import React from 'react';
import * as S from './styled';

export interface ContainerProps {
  children?: React.ReactNode;
  display?: string;
}

const Container: React.FC<ContainerProps> = ({ children, display = 'flexDSB' }) => {
  return <S.Container $display={display}>{children}</S.Container>;
};

export default Container;
