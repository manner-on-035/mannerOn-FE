import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import * as S from "./styled"
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { HomeCarousel } from '@components/Home';

const carouselItems = [
    { category: '매너있게', items: ['정중하게 부탁 거절', '정중하게 업무 요청', '매너있게 상대방과 다른 의견 전달'] },
    { category: '사회생활 만렙', items: ['경조사 인사', '감사인사 전달', '명절인사 전달'] },
    {
      category: '프로페셔널',
      items: ['실수 내용은 인정하고 수습, 대처방안 전달하기', '간결, 논리정연하게 수정', '프로페셔널하게 기한 연장 요청'],
    },
  ];

const Carousel: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState(carouselItems[0].items[0]);
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { id },
    } = event;
    setActiveBtn(id);
  };

  useEffect(() => {
    carouselItems.forEach((carouselItem) => {
      carouselItem.items.forEach((item) => {
        if (item === activeBtn) {
          document.getElementById(item)!.style.color = "red";
        } else {
          document.getElementById(item)!.style.color = "black";
        }
      });
    });
  }, [activeBtn]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
      {carouselItems.map((item, index) => (
          <HomeCarousel key={index} index={index} carouselItem={item} onClick={onClick} id={item}/>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
