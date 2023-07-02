import { SlidesImg } from '@/sliders/ServiceSlider/partials/Slides/index.styles';

export interface ISlidesProps {
  id?: string;
  image: string;
  alt: string;
}
export function Slides({ image, alt }: ISlidesProps) {
  return <SlidesImg src={image} alt={alt} />;
}
