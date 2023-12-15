import styled from 'styled-components';

interface CarouselItemProps {
  selected: boolean;
}

export const CarouselItem = styled.div<CarouselItemProps>`
  display: block;
  border-radius: 20px;
  width: fit-content;
  // background-color: ${({ theme }) => theme.colors.gray20};
  padding: 8px 18px;
  margin: 4px;
  cursor: pointer;
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary: theme.colors.gray20 )};
`;

export const CarouselText = styled.p<CarouselItemProps>`
  ${({ theme }) => theme.fonts.body2_medium};
  color: ${({ selected, theme }) => (selected ? theme.colors.white: theme.colors.darkgrey )};
`;

export const CarouselDots = styled.div`
  display: flex;
  margin: 0 auto;
  padding-block: 10px;
`;

export const CarouselDot = styled.label`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray50};
  opacity: 0.7;
  margin: 2px;
  cursor: pointer;
`;
