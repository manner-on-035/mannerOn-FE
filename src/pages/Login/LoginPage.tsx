import * as S from "./styled"
import BlackMediumLogo from '@assets/logo/BlackMediumLogo.svg'

const LoginPage = () => {
    console.log("login")
    return (
     
        <S.Login>
            <S.WrapperTop>
                <S.ImgWrapper>  
                    <img src={BlackMediumLogo} alt="logo"/>
                </S.ImgWrapper>
                <S.LoginTitle>안녕하세요.<br/>매너ON입니다.</S.LoginTitle>
                <S.LoginSubTitle>회원 서비스 이용을 위해 로그인 해주세요.</S.LoginSubTitle>
            </S.WrapperTop>
            <S.WrapperCenter>
            </S.WrapperCenter>  
            <S.JoinText>아직 회원이 아니신가요? <S.HighLight>회원가입</S.HighLight></S.JoinText>
        </S.Login>

    );
};

export default LoginPage;