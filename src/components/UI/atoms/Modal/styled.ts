import styled from "styled-components";


interface ModalProps {
    $isError?: boolean;
    isClicked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    opacity?: number;
  }

  export const Modal = styled.div<ModalProps>`
    width:344px;
    height:44px;
    display:flex;
    z-index: 999;

    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-left:16px;
    align-items:center;

    background-color: #000000CC;
    border-radius: 8px;

    opacity: ${({ opacity }) => opacity};
    transition: all 0.5s ease-in-out;

  `;

  export const CopyIconWrapper = styled.div<ModalProps>`
    width:20px;
    height:20px;
    margin-right:8px;

  `;

  export const CopyText = styled.div<ModalProps>`
    ${({theme}) => theme.fonts.body2};
    color:white;
  `;