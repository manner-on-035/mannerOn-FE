import styled, { keyframes } from 'styled-components';

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

interface ModalProps {
  $isError?: boolean;
  isClicked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  opacity?: number;
}

export const Modal = styled.div<ModalProps>`
  width: 344px;
  height: 44px;
  display: flex;
  z-index: 999;

  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 16px;
  align-items: center;

  background-color: #000000cc;
  border-radius: 8px;

  animation: ${fadeOutAnimation} 2s ease-in-out forwards;
`;

export const CopyIconWrapper = styled.div<ModalProps>`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const CopyText = styled.div<ModalProps>`
  ${({ theme }) => theme.fonts.body2};
  color: white;
`;
