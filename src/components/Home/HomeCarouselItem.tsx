import { useState } from 'react';
import * as S from './styled';

interface HomeCarouselItemProps {
  items: string[];
  onItemSelect: (item: string) => void;
  selectedItem: string | null;
}

const HomeCarouselItem: React.FC<HomeCarouselItemProps> = ({ items, onItemSelect, selectedItem }) => {

  return (
    <>
      {items?.map((item: string) => {
        return (
          <S.CarouselItem
            key={item}
            onClick={() => onItemSelect(item)}
            selected={item === selectedItem}
          >
            <S.CarouselText selected={item === selectedItem}>
            {item}
            </S.CarouselText>
          </S.CarouselItem>
        );
      })}
    </>
  );
};

export default HomeCarouselItem;