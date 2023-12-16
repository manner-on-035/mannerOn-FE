import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as S from './styled';
import { Modal } from '@UI/atoms/Modal';
import CopyIcon from '@assets/icon/copyIcon';
import LikeIcon from '@assets/icon/likeIcon';
import DislikeIcon from '@assets/icon/dislikeIcon';
import { usePutCopyMessageMutation } from '@apis/copy/copyQuery';
import { usePutFeedbackMutation } from '@apis/feedback/feedbackQuery';
import { IconRes } from 'types/feedback';
import { BusinessErrorResponse, HTTPResponse } from 'types/common';

export interface ChatIconProps {
  text?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  currentChatId?: number;
}

const ChatIcons: React.FC<ChatIconProps> = ({ text, onChange, onClick, currentChatId }) => {
  const [copyClicked, setcopyClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [likeIconClicked, setLikeIconClicked] = useState(false);
  const [dislikeIconClicked, setDislikeIconClicked] = useState(false);

  const { mutate: putCopyMessage } = usePutCopyMessageMutation({
    onSuccess: (res) => {
      console.log('copy message success =>', res);
    },
    onError: (err) => {
      console.log('copy message Error =>', err);
    },
  });

  const { mutate: putFeedback } = usePutFeedbackMutation(currentChatId ?? 0, {
    onSuccess: (res: HTTPResponse<IconRes> | BusinessErrorResponse) => {
      console.log('feedback message success =>', res);
    },
    onError: (err: Error) => {
      console.log('feedback message Error =>', err);
    },
  });

  // let putFeedback: any;
  // if (currentChatId !== undefined) {
  //   putFeedback = putFeedbackTemp;
  // }

//   const { mutate: putFeedback } = usePutFeedbackMutation(currentChatId, {
//     onSuccess: (res: IconRes)=> {
//       console.log('feedback message success =>', res);
//     },
//     onError: (err): void => {
//       console.log('feedback message Error =>', err);
//     },
//   })

  let textString: string | undefined;
  if (typeof text === 'string') {
    textString = text;
  } else if (React.isValidElement(text)) {
    textString = ReactDOMServer.renderToStaticMarkup(text);
  } else {
    textString = undefined;
  }

  const handleClick = () => {
    setcopyClicked(!copyClicked);
    if (!copyClicked) {
      showModal();
      putCopyMessage({ chatId: currentChatId as number });
    }else{
      console.error('currentChatId is undefined');
    }
  };

  const handleLikeIconClick = () => {
    setLikeIconClicked(!likeIconClicked);
    setDislikeIconClicked(false);
    putFeedback({ feedback: 1});
  };

  const handleDislikeIconClick = () => {
    setDislikeIconClicked(!dislikeIconClicked);
    setLikeIconClicked(false);
    putFeedback({ feedback: -1});
  };

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <S.ChatIcons onChange={onChange}>
      <S.StyledCopyIcon>
        <CopyToClipboard text={textString || ''} onCopy={handleClick}>
          <div>
            <CopyIcon isClicked={copyClicked} />
          </div>
        </CopyToClipboard>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </S.StyledCopyIcon>
      <S.StyledLikeIcon>
        <LikeIcon isClicked={likeIconClicked} onClick={handleLikeIconClick} />
      </S.StyledLikeIcon>
      <S.StyledDislikeIcon>
        <DislikeIcon isClicked={dislikeIconClicked} onClick={handleDislikeIconClick} />
      </S.StyledDislikeIcon>
    </S.ChatIcons>
  );
};

export default ChatIcons;