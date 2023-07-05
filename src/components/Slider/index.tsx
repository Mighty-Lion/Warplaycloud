import { PropsWithChildren } from 'react';
import { SliderContainer } from '@/components/Slider/index.styles';

const autoPlaySettings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  pauseOnHover: true,
};

export function SliderAutoPlay({ children }: PropsWithChildren) {
  return <SliderContainer {...autoPlaySettings}>{children}</SliderContainer>;
}
