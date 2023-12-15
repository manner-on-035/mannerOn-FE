import React, { useState } from 'react';
import * as S from './styled';
import CopyIcon from '@assets/icon/copyIcon'
import LikeIcon from '@assets/icon/likeIcon'
import DislikeIcon from '@assets/icon/dislikeIcon'
import { Modal } from '@UI/atoms/Modal';

export interface ChatIconProps {
//   value?: string;
//   betweenSpace?: number;
//   containerHeight?: number | 'auto';
  // isClicked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties; 
  // setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatIcons: React.FC<ChatIconProps> = ({
//   betweenSpace = 2,
//   containerHeight = 'auto',
//   value,
  onChange,  
  onClick,
  style,

}) => {

  const [copyClicked, setcopyClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setcopyClicked(!copyClicked);
    if (!copyClicked) {
      showModal();
    }
  };

  const showModal = () => {
      setModalOpen(true);
    };


  return (
    <S.ChatIcons onChange={onChange}>
      <S.StyledCopyIcon>
        <CopyIcon isClicked={copyClicked} onClick={handleClick} />
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </S.StyledCopyIcon>
      <S.StyledLikeIcon>
        <LikeIcon  />
      </S.StyledLikeIcon>
      <S.StyledDislikeIcon>
       <DislikeIcon  />
      </S.StyledDislikeIcon>
    </S.ChatIcons>
  );
};
export default ChatIcons;