import styled from 'styled-components';

export const Login = styled.section`
  padding-top: 88px;
`;

export const WrapperTop = styled.div`
    color: ${({theme}) => theme.colors.darkgrey};

    
`;
export const ImgWrapper = styled.div`
  padding-bottom: 24px;
`;
export const LoginTitle = styled.p`
  ${({ theme }) => theme.fonts.h2};
`;
export const OrangeText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
export const LoginSubTitle = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

export const WrapperCenter = styled.div`
  padding-top: 48px;

  Input {
    margin-bottom: 12px;
  }
`;

export const JoinText = styled.p`
  ${({ theme }) => theme.fonts.CTA_small};
  color: ${({ theme }) => theme.colors.darkgray};
  margin-top: 48px;
  text-align: center;
`;

export const UnderlineText = styled.button`
  padding: 0;
  width: 43px;
  height: 14px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid black;
  color: ${({ theme }) => theme.colors.darkgray};
  background-color: ${({ theme }) => theme.colors.white};
`;
export const HighLight = styled.span``;
