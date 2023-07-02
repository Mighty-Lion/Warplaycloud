import { PropsWithChildren } from 'react';
import { SliderContainer } from '@/components/Slider/index.styles';

const autoPlaySettings = {
  dots: false,
  
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  
};
export function SliderAutoPlay({ children }: PropsWithChildren) {
  return <SliderContainer {...autoPlaySettings}>{children}</SliderContainer>;
}
