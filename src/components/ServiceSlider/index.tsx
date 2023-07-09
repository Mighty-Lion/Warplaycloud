import Slider from 'react-slick';
import { useState } from 'react';
import { SliderWrapper } from '@/components/ServiceSlider/index.styles';
import Stalker from '../../assets/images/jpg/stalker.jpg';
import Kratos from '../../assets/images/jpg/kratos.jpg';
import Pilot from '../../assets/images/jpg/pilot.jpg';
import StarCruiser from '../../assets/images/jpg/star-cruiser.jpg';
import { Slides } from '@/components/ServiceSlider/partials/Slides';
import { SliderContent } from '@/components/ServiceSlider/partials/SliderContent';
import { Line } from '@/components/Line/index.styles';
import { BigLogo } from '../SliderLogo';
import { MenuBtn } from '@/components/ServiceSlider/partials/MenuButton';
import { IMenuProps } from '@/pages/Home';

const slidesArr = [
  { id: 'stalker', imagePath: Stalker },
  { id: 'kratos', imagePath: Kratos },
  { id: 'pilot', imagePath: Pilot },
  { id: 'StarCruiser', imagePath: StarCruiser },
];

const mappedSlides = slidesArr.map((item) => (
  <Slides key={item.id} imagePath={item.imagePath} />
));

const autoPlaySettings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
};

export function ServiceSlider({ isOpenMenu, setIsOpenMenu }: IMenuProps) {
  return (
    <SliderWrapper>
      <BigLogo />
      <Slider {...autoPlaySettings}>{mappedSlides}</Slider>
      <SliderContent />
      <Line
        top="123px"
        left="50%"
        width="1px"
        height="77px"
        translateX="-50%"
        BGC="#FFF"
      />
      <MenuBtn
        isOpenMenu={isOpenMenu}
        onClick={() => setIsOpenMenu && setIsOpenMenu(!isOpenMenu) }
        strokeWidth="5px"
        color="#EAE5E5"
        transition={{ ease: 'easeOut', duration: 0.2 }}
      />
    </SliderWrapper>
  );
}
