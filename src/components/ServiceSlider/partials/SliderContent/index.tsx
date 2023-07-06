import {
  SliderButton,
  SliderContentContainer,
  SliderText,
  SliderTextDescription,
  SliderTextTitle,
} from '@/components/ServiceSlider/partials/SliderContent/index.styles';

export function SliderContent() {
  return (
    <SliderContentContainer>
      <SliderText>
        <SliderTextTitle>Сервис облачного гейминга</SliderTextTitle>
        <SliderTextDescription>
          Преврати свое устройство в игровое
        </SliderTextDescription>
      </SliderText>
      <SliderButton>UPGRADE</SliderButton>
    </SliderContentContainer>
  );
}
