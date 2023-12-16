import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HomeCarousel } from '@components/Home';

const carouselItems = [
  { category: '매너있게', items: ['정중하게 부탁 거절', '정중하게 업무 요청', '매너있게 상대방과 다른 의견 전달'] },
  { category: '사회생활 만렙', items: ['경조사 인사', '감사 인사 전달', '명절 인사 전달'] },
  {
    category: '프로페셔널',
    items: ['실수 내용은 인정하고 수습, 대처방안 전달하기', '간결, 논리정연하게 수정', '프로페셔널하게 기한 연장 요청'],
  },
];

interface CarouselProps {
  onItemSelect: (item: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ onItemSelect }) => {
  const [activeBtn, setActiveBtn] = useState([[]]);

  const handleItemClick = (item: string) => {
    onItemSelect(item);
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <HomeCarousel
            key={index}
            index={index}
            carouselItem={item}
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}
            onItemSelect={handleItemClick}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
