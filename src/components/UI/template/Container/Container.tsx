import React from 'react';
import * as S from './styled';

export interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
