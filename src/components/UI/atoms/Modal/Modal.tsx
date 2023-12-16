import * as S from './styled';
import copyModalIcon from '@assets/icon/copyModalIcon.svg';
import { useEffect } from 'react';
interface ModalProps {
  type?: string;
  modalText: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ type, modalText, setModalOpen }: ModalProps) => {
  useEffect(() => {
    const timer = setTimeout(() => setModalOpen(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Modal>
      {!!(type === 'copy') && (
        <S.CopyIconWrapper>
          <img src={copyModalIcon} alt="icon" />
        </S.CopyIconWrapper>
      )}
      <S.CopyText>{modalText}</S.CopyText>
    </S.Modal>
  );
};
export default Modal;
