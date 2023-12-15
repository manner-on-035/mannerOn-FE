import React, { useState } from 'react';
import * as S from './styled';
import { Container } from '@UI/template';
import { Box, SvgWrapper, Text, Input, ChatBox } from '@UI/atoms';
import gnbIcon from '@assets/icon/gnbIcon.svg';
import dotIcon from '@assets/icon/dotIcon.svg';
import newChatIcon from '@assets/icon/newChatIcon.svg';
import blackSmallLogo from '@assets/logo/BlackSmallLogo.svg';
import sendDefaultIcon from '@assets/icon/sendDefaultIcon.svg';
import { HomeCarousel, HomeCarouselDots } from '@components/Home';
import Carousel from '@UI/organisms/Carousel';
import {ChatIcons} from '@UI/molecules/ChatIcons';

const carouselItems = [
  { category: '매너있게', items: ['정중하게 부탁 거절', '정중하게 업무 요청', '매너있게 상대방과 다른 의견 전달'] },
  { category: '사회생활 만렙', items: ['경조사 인사', '감사인사 전달', '명절인사 전달'] },
  {
    category: '프로페셔널',
    items: ['실수 내용은 인정하고 수습, 대처방안 전달하기', '간결, 논리정연하게 수정', '프로페셔널하게 기한 연장 요청'],
  },
];

const HomePage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <Box height={'100vh'}>
      <Box height={50} display={'flexSBC'}>
        <SvgWrapper svg={gnbIcon} onClick={() => {}} style={{ cursor: 'pointer' }} />
        <SvgWrapper svg={newChatIcon} onClick={() => {}} style={{ cursor: 'pointer' }} />
      </Box>
      <Container>
        <Box>
          <S.WrapperTop>
            <Box display={'flexDAC'} textAlign={'center'}>
              <SvgWrapper width={48} height={48} style={{ marginBlock: '10px' }} svg={blackSmallLogo} />
              <Text width={270} fontSize={14} fontWeight={500} line-height={18} color={'darkgray'}>
                질문에 포함하면 더 정확한 답변을 받을수 있어요 대화상대, 대화 목적, 예시, 지시사항
              </Text>
            </Box>
          </S.WrapperTop>
          <Box>
            <Box display={'flexCC'} textAlign={'center'} padding={'15px'}>
              <SvgWrapper svg={dotIcon} />
              <Text width={200} fontSize={14} fontWeight={700} line-height={18} color={'gray50'}>
                아래 카테고리를 이용할 수 있어요
              </Text>
            </Box>
            <Carousel/>
            {/* <HomeCarouselDots /> */}
            {/* <ChatIcons/>
            <ChatBox backGroundColor={'gray'}>
              {'안녕하세요,안녕하세요, 보고서 작성에 필요한 자료 전달에 대해 문'}
            </ChatBox> */}
          </Box>
        </Box>
        <Box display={'flexCC'} margin={'0 0 20px 0'} gap={4}>
          <Input
            width={300}
            borderRadius={50}
            borderColor={'gray20'}
            backGroundColor={'gray20'}
            placeholder={'원하는 걸 물어보세요'}
          />
          <SvgWrapper svg={sendDefaultIcon} onClick={() => {}} style={{ cursor: 'pointer' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
