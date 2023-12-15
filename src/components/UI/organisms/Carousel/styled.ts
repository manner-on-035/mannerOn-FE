import styled from 'styled-components';

type ButtonProps = {
    variant: 'default' | 'outline';
    children: React.ReactNode;
  };
  
export const StyledButton = styled.button<ButtonProps>`
    padding: 3rem 6rem;
    border-radius: 50%;
    margin-bottom: 4rem;
    font-size: 1rem;
    border: none;
    ${({ variant }) =>
      variant === 'default'
        ? `
          background-color: black;
          color: white;
    `
        : `
          background-color: #F6F6F6;
          color: black;
    `}
  `;