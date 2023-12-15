import * as S from './styled';
import WhiteBigLogo from '@assets/logo/WhiteBigLogo.svg';

const SplashPage = () => {
  return (
    <S.Splash>
      <S.Wrapper>
        <S.Title>
          답장이 고민될 때 매너<S.Highlight>ON</S.Highlight>
        </S.Title>
        <S.ImgWrapper>
          <img src={WhiteBigLogo} alt="logo" />
        </S.ImgWrapper>
      </S.Wrapper>
    </S.Splash>
  );
};

export default SplashPage;
