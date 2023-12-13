import styled from 'styled-components';


// @assets/logo/WhiteBigLogo.svg
export const Splash = styled.section` 
   background-color: black;
`;

export const Title = styled.p`
    ${({theme}) => theme.fonts.body2_bold};
    color: ${({theme}) => theme.colors.white};
    line-height:14px;

`;

export const WhiteBigLogo = styled.div`
  
`;
