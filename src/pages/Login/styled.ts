import styled from 'styled-components';

export const Login = styled.section`
  padding-top: 88px;
`;

export const WrapperTop = styled.div`
  color: ${({ theme }) => theme.colors.darkgray};
  padding-top: 88px;
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
export const UnderlineText = styled.a`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkgray};
`;
export const HighLight = styled.span``;
