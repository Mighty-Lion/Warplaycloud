import {
  DevicesContainer,
  DevicesImage,
  DevicesImageWrapper,
  DevicesLink,
  DevicesMain,
  DevicesText,
  DevicesThemeWrapper,
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
        <BlockTitle marginBottom="90px" mobileMarginBottom="31px">
          Запускайте на любых устройствах
        </BlockTitle>
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
