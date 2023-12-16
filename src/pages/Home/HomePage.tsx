import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { CHAT_PROMPT } from '@libs/prompt';
import * as S from './styled';
import { Container } from '@UI/template';
import Carousel from '@UI/organisms/Carousel';
import { Box, SvgWrapper, Text, Input, ChatBox } from '@UI/atoms';
import gnbIcon from '@assets/icon/gnbIcon.svg';
import dotIcon from '@assets/icon/dotIcon.svg';
import newChatIcon from '@assets/icon/newChatIcon.svg';
import blackSmallLogo from '@assets/logo/BlackSmallLogo.svg';
import sendDefaultIcon from '@assets/icon/sendDefaultIcon.svg';
import { usePostChatStartMutation, usePostChatMutation } from '@apis/chat/chatQuery';

interface SelectedQuestion {
  question: string;
  prompt: string;
  chat: string;
}

const HomePage = () => {
  const { getValues, setValue } = useFormContext();
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [seletedPrompt, setSelectedPrompt] = useState<SelectedQuestion>({ question: '', prompt: '', chat: '' });
  const [chatList, setChatList] = useState<{ aiChat: string; userChat: string }[]>([]);

  const { mutate: postChatStart } = usePostChatStartMutation({
    onSuccess: (res) => {
      console.log('chat start success =>', res);
      const chat = getValues('chat');
      const { data } = res;
      if (chat && getValues('chat.userChat')) {
        setChatList((prev) => {
          return [...prev, { aiChat: data.content, userChat: getValues('chat.userChat') }];
        });
      }
    },
  });

  const handleCarouselItemClick = (item: string) => setSelectedQuestion(item);

  const handleClickChatSendButton = () => {
    const chat = getValues('chat');
    if (selectedQuestion && chat && getValues('chat.userChat')) {
      const { userChat } = getValues('chat');
      // API 호출
      setChatList((prev) => {
        return [...prev, { aiChat: '', userChat }];
      });
      setValue('chat.userChat', '');
    }
  };

  useEffect(() => {
    if (selectedQuestion) {
      const selectedQuestionItem = CHAT_PROMPT.QUESTION.find((item) => {
        if (item.question === selectedQuestion) return item;
      });
      setSelectedPrompt(selectedQuestionItem as SelectedQuestion);
    }
  }, [selectedQuestion]);

  useEffect(() => {
    if (seletedPrompt?.prompt) {
      postChatStart({ category: seletedPrompt?.question, chat: seletedPrompt?.prompt });
    }
  }, [seletedPrompt]);

  return (
    <Box height={'100vh'}>
      <Box height={50} display={'flexSBC'}>
        <SvgWrapper svg={gnbIcon} onClick={() => {}} style={{ cursor: 'pointer' }} />
        <SvgWrapper svg={newChatIcon} onClick={() => {}} style={{ cursor: 'pointer' }} />
      </Box>
      <Container>
        <S.ChatWrapper>
          <S.WrapperTop>
            <Box display={'flexDAC'} textAlign={'center'}>
              <SvgWrapper width={48} height={48} style={{ marginBlock: '10px' }} svg={blackSmallLogo} />
              <Text width={270} fontSize={14} fontWeight={500} line-height={18} color={'darkgray'}>
                질문에 포함하면 더 정확한 답변을 받을수 있어요 대화상대, 대화 목적, 예시, 지시사항
              </Text>
            </Box>
          </S.WrapperTop>
          <Box>
            {selectedQuestion ? (
              <Box display={'flexDJC'} gap={16}>
                {[
                  {
                    aiChat: '네 답변 드립니다.네 답변 드립니다.네 답변 드립니다.',
                    userChat: '궁금해이러이러한게 궁금해이러이러한게 궁금해',
                  },
                ].map((chat) => {
                  return (
                    <>
                      <Box display={'flexDJC'} gap={16}>
                        <ChatBox role={'ai'}>{chat?.aiChat}</ChatBox>
                        <ChatBox>{chat?.userChat}</ChatBox>
                      </Box>
                      <Box display={'flexDJC'} gap={16}>
                        <ChatBox role={'ai'}>{chat?.aiChat}</ChatBox>
                        <ChatBox>{chat?.userChat}</ChatBox>
                      </Box>
                    </>
                  );
                })}
                {/* {chatList.map((chat) => {
                  return (
                    <Box display={'flexDJC'} gap={16}>
                      <ChatBox>{chat.aiChat}</ChatBox>
                      <ChatBox>{chat.userChat}</ChatBox>
                    </Box>
                  );
                })} */}
                {/* {chatList.map((chat, i) => {
                  return (
                    <Box key={i} display={'flexDJC'} gap={16}>
                      {!chat?.aiChat ? (
                        <ChatBox>{chat?.userChat}</ChatBox>
                      ) : (
                        <>
                          <ChatBox>{chat?.userChat}</ChatBox>
                          <ChatBox role={'ai'}>{chat?.aiChat}</ChatBox>
                        </>
                      )}
                    </Box>
                  );
                })} */}
              </Box>
            ) : (
              <>
                <Box display={'flexCC'} textAlign={'center'} padding={'85px 15px 15px 15px'}>
                  <SvgWrapper svg={dotIcon} />
                  <Text width={150} fontSize={14} fontWeight={700} line-height={18} color={'gray50'}>
                    이런걸 물어 볼 수 있어요.
                  </Text>
                </Box>
                <Carousel onItemSelect={handleCarouselItemClick} />
              </>
            )}
          </Box>
        </S.ChatWrapper>
        <Box display={'flexCC'} margin={'20px 0 20px 0'} gap={4}>
          <Input
            width={300}
            borderRadius={50}
            borderColor={'gray20'}
            backGroundColor={'gray20'}
            registerName={'chat.userChat'}
            disabled={!selectedQuestion}
            placeholder={selectedQuestion ? '무슨 고민이 있으신가요?' : '질문을 선택하시면 대화가 시작됩니다'}
          />
          <SvgWrapper svg={sendDefaultIcon} style={{ cursor: 'pointer' }} onClick={handleClickChatSendButton} />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
