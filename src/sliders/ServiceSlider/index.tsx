import { SliderWrapper } from '@/sliders/ServiceSlider/index.styles';
import { SliderAutoPlay } from '@/components/Slider';
import Stalker from '../../assets/images/jpg/stalker.jpg';
import Kratos from '../../assets/images/jpg/kratos.jpg';
import Pilot from '../../assets/images/jpg/pilot.jpg';
import StarCruiser from '../../assets/images/jpg/star-cruiser.jpg';
import { Slides } from '@/sliders/ServiceSlider/partials/Slides';

const slidesArr = [
  { id: 'stalker', imagePath: Stalker },
  { id: 'kratos', imagePath: Kratos },
  { id: 'pilot', imagePath: Pilot },
  { id: 'StarCruiser', imagePath: StarCruiser },
];

const mappedSlides = slidesArr.map((item) => (
  <Slides key={item.id} imagePath={item.imagePath} />
));
export function ServiceSlider() {
  return (
    <SliderWrapper>
      <SliderAutoPlay>{mappedSlides}</SliderAutoPlay>
    </SliderWrapper>
  );
}
