import styled from 'styled-components';

// @assets/logo/WhiteBigLogo.svg
export const Splash = styled.section` 
   background-color:  ${({theme}) => theme.colors.primary};
   margin: 0px -16px 0px -16px;
`;

export const Wrapper = styled.div` 
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction:column;
`;

export const Title = styled.p`
    ${({theme}) => theme.fonts.body2_bold};
    color: ${({theme}) => theme.colors.white};
    line-height:14px;
    margin-bottom: 12px;

`;
export const Highlight = styled.span`
  color: ${({theme}) => theme.colors.secondary};


`;
export const ImgWrapper = styled.div`
  align-items: center;
`;
