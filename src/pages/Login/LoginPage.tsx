import { Button, Input } from "@UI/atoms";
import * as S from "./styled"
import BlackMediumLogo from '@assets/logo/BlackMediumLogo.svg'

const LoginPage = () => {
    console.log("login")
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // handle input change logic here
    };
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // handle button click logic here
    };
    return (
     
        <S.Login>
            <S.WrapperTop>
                <S.ImgWrapper>  
                    <img src={BlackMediumLogo} alt="logo"/>
                </S.ImgWrapper>
                <S.LoginTitle>안녕하세요.<br/><S.OrangeText>매너ON</S.OrangeText>입니다.</S.LoginTitle>
                <S.LoginSubTitle>회원 서비스 이용을 위해 로그인 해주세요.</S.LoginSubTitle>
            </S.WrapperTop>
            <S.WrapperCenter>
            <Input 
            placeholder={"아이디 (이메일)"}
            maxLength={30}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            />
            <Input 
            placeholder={"비밀번호 (최소 6자리 이상, 대문자, 특수문자 포함)"}
            maxLength={20}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            />
            <Button backGroundColor={"white"} onClick={handleButtonClick}>
                {"로그인"}
      
            </Button>
      

            </S.WrapperCenter>  
            <S.JoinText>아직 회원이 아니신가요?&nbsp;&nbsp;<S.UnderlineText href="#">회원가입</S.UnderlineText></S.JoinText>
        </S.Login>

    );
};

export default LoginPage;