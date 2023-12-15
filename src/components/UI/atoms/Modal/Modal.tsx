import * as S from './styled';
import copyModalIcon from "@assets/icon/copyModalIcon.svg"
import { useEffect, useState } from 'react';

interface ModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  const Modal = ({ setModalOpen }: ModalProps) => {
    const [opacity, setOpacity] = useState(1);
    useEffect(() => {
        const timer = setTimeout(() => setModalOpen(false), 3000);
        return () => clearTimeout(timer);
      }, []);
      
    return (
      <S.Modal opacity={opacity}>
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