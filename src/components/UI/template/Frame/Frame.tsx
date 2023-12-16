import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './styled';

const Frame: React.FC = () => {

  return (
    <S.Container>
      <S.Main>
        <Outlet/>
      </S.Main>
    </S.Container>
  );
};

export default Frame;
