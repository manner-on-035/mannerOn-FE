import * as S from './styled';
import copyModalIcon from "@assets/icon/copyModalIcon.svg"
import { useEffect, useState } from 'react';

interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  const Modal = ({ setModalOpen }: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      if (isModalOpen) {
        const timer = setTimeout(() => {
          setIsModalOpen(false);
          setModalOpen(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }, [isModalOpen]);
  
    return (
      <S.Modal>
        <S.CopyIconWrapper>
         <img src={copyModalIcon} alt="icon"/>
        </S.CopyIconWrapper>
        <S.CopyText>
            메세지를 복사했어요.
        </S.CopyText>
        
      </S.Modal>
    );
  }
export default Modal;