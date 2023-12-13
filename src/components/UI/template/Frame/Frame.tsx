import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import * as S from './styled';

const Frame: React.FC = () => {
  // const location = useLocation();
  // const isNavVisible = location.pathname === '';

  return (
    <S.Container>
      <S.Main>
        <Outlet/>
      </S.Main>
    </S.Container>
  );
};

export default Frame;
