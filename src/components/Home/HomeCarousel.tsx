
import React from 'react';
import { Box, Text } from '@UI/atoms';
import HomeCarouselItem from './HomeCarouselItem';

const HomeCarousel = ({ index, carouselItem }: any) => {
  return (
    <Box display={'flexDAC'} textAlign={'center'}>
      <Text fontSize={20} fontWeight={700} color={'darkgray'} padding={'10px'}>
        {carouselItem.category}
      </Text>
      <HomeCarouselItem items={carouselItem.items} />
    </Box>
  );
};

export default HomeCarousel;
