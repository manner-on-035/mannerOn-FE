import ChatBox from '@UI/atoms/ChatBox';
import * as S from "./styled"
import blackSmallLogo from '@assets/logo/blackSmallLogo.svg'

const MainPage = () => {

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
       
  };

    return(
        <S.Main>
          <ChatBox 
          $isError={false}
          $backGroundColor={"secondary"}
          onFocus={handleButtonClick}
          text={"text"}/>
        </S.Main>
    )
}

export default MainPage