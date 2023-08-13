import {
  LocationsContainer,
  LocationsImg,
  LocationsSvgWrapper,
  LocationsThemeWrapper,
} from '@/components/Locations/index.styles';
import { BlockTheme } from '@/components/BlockTheme';
import { BlockTitle } from '@/components/BlockTitle';
import LocationsImage from '@/assets/images/svg/map.svg';

export function Locations() {
  return (
    <LocationsContainer>
      <LocationsThemeWrapper>
        <BlockTheme>Игровые сервера на карте</BlockTheme>
      </LocationsThemeWrapper>
      <BlockTitle marginBottom="30px" mobileMarginBottom="0">
        Карта локаций
      </BlockTitle>
      <LocationsSvgWrapper>
        <LocationsImg src={LocationsImage} alt="locations image" />
      </LocationsSvgWrapper>
    </LocationsContainer>
  );
}
