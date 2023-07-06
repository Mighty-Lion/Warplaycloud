import { SlidesImg } from '@/components/ServiceSlider/partials/Slides/index.styles';

export interface ISlidesProps {
  id?: string;
  imagePath: string;
  alt?: string;
}
export function Slides({ imagePath }: ISlidesProps) {
  return <SlidesImg imagePath={imagePath} />;
}
