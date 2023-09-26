import {
  SliderButton,
  SliderExplanationContainer,
  SliderText,
  SliderTextDescription,
  SliderTextTitle,
} from '@/components/ServiceSlider/partials/SliderContent/index.styles';

export function SliderExplanation() {
  return (
    <SliderExplanationContainer>
      <SliderText>
        <SliderTextTitle>Сервис облачного гейминга</SliderTextTitle>
        <SliderTextDescription>
          Преврати свое устройство в игровое
        </SliderTextDescription>
      </SliderText>
      <SliderButton to="/register">UPGRADE</SliderButton>
    </SliderExplanationContainer>
  );
}
