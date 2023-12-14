import { Frame } from "@UI/template";
import * as S from "./styled"
import whiteBigLogo from '@assets/logo/whiteBigLogo.svg'

const SplashPage = () => {
    console.log("splash")
    return (
        <S.Splash>
            <S.Wrapper>
                <S.Title>답장이 고민될 때 매너<S.Highlight>ON</S.Highlight></S.Title>
                <S.ImgWrapper>
                <img src={whiteBigLogo} alt="logo"/>
                </S.ImgWrapper>
            </S.Wrapper>
        </S.Splash>

    );
};

export default SplashPage;
