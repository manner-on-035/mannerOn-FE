import * as S from './styled';
import { Box } from '@UI/atoms';

const HomeCarouselDots = () => {
  return (
    <Box display={'flexAlignItemsCenter'} gap={8}>
      <S.CarouselDots>
        <S.CarouselDot />
        <S.CarouselDot />
        <S.CarouselDot />
      </S.CarouselDots>
    </Box>
  );
};

export default HomeCarouselDots;
