import { Text } from '@UI/atoms';
import * as S from './styled';

const HomeCarouselItem = ({ items }: any) => {
  return (
    <>
      {items?.map((item: string) => {
        return (
          <S.CarouselItem key={item}>
            <Text fontSize={14} fontWeight={500}>
              {item}
            </Text>
          </S.CarouselItem>
        );
      })}
    </>
  );
};

export default HomeCarouselItem;
