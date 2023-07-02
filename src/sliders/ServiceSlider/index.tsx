import { SliderWrapper } from '@/sliders/ServiceSlider/index.styles';
import { SliderAutoPlay } from '@/components/Slider';
import Stalker from '../../assets/images/jpg/stalker.jpg';
import Kratos from '../../assets/images/jpg/kratos.jpg';
import Pilot from '../../assets/images/jpg/pilot.jpg';
import StarCruiser from '../../assets/images/jpg/star-cruiser.jpg';
import { Slides } from '@/sliders/ServiceSlider/partials/Slides';

const slidesArr = [
  { id: 'stalker', image: Stalker, alt: 'stalker image' },
  { id: 'kratos', image: Kratos, alt: 'kratos image' },
  { id: 'pilot', image: Pilot, alt: 'pilot image' },
  { id: 'StarCruiser', image: StarCruiser, alt: 'Star Cruiser image' },
];

const mappedSlides = slidesArr.map((item) => (
  <Slides key={item.id} image={item.image} alt={item.alt} />
));
export function ServiceSlider() {
  return (
    <SliderWrapper>
      <SliderAutoPlay>{mappedSlides}</SliderAutoPlay>
    </SliderWrapper>
  );
}
