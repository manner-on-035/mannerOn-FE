import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-70px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px); 
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    
  }
`;

export const Splash = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.body2_bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: 14px;
  margin-bottom: 12px;
  animation: ${fadeInFromLeft} 1.1s ease-in-out; /* 애니메이션 적용 */
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ImgWrapper = styled.div`
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-in-out forwards;
  animation-delay: 1s;
`;
