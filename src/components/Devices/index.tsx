import {
  DevicesContainer,
  DevicesImage,
  DevicesImageWrapper,
  DevicesLink,
  DevicesMain,
  DevicesMobileImageWrapper,
  DevicesText,
  DevicesThemeWrapper,
  DevicesTitleWrapper,
} from '@/components/Devices/index.styles';
import { BlockTheme } from '@/components/BlockTheme';
import { BlockTitle } from '@/components/BlockTitle';
import DevicesImg from '@/assets/images/png/ImageBrowser.png';

export function Devices() {
  return (
    <DevicesContainer>
      <DevicesMain>
        <DevicesThemeWrapper>
          <BlockTheme>Играть можно в браузере</BlockTheme>
        </DevicesThemeWrapper>
        <DevicesTitleWrapper>
          <BlockTitle marginBottom="90px" mobileMarginBottom="31px">
            Запускайте на любых устройствах
          </BlockTitle>
        </DevicesTitleWrapper>
        <DevicesMobileImageWrapper>
          <DevicesImage src={DevicesImg} alt="devices image" />
        </DevicesMobileImageWrapper>
        <DevicesText>
          Наш модуль доступен на все популярные ОС и работает на всех
          компьютерах.
        </DevicesText>
        <DevicesLink to="/">Открыть в браузере</DevicesLink>
      </DevicesMain>
      <DevicesImageWrapper>
        <DevicesImage src={DevicesImg} alt="devices image" />
      </DevicesImageWrapper>
    </DevicesContainer>
  );
}
