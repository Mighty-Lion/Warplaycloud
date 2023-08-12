import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';
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
import { slidingVariants } from '@/components/variants';

export function Devices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log('Element is in view: ', isInView);
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <DevicesContainer ref={ref}>
      <DevicesMain
        initial="hidden"
        animate={controls}
        custom
        variants={slidingVariants}
      >
        <DevicesThemeWrapper>
          <BlockTheme custom variants={slidingVariants}>
            Играть можно в браузере
          </BlockTheme>
        </DevicesThemeWrapper>
        <DevicesTitleWrapper>
          <BlockTitle
            custom
            variants={slidingVariants}
            marginBottom="90px"
            mobileMarginBottom="31px"
          >
            Запускайте на любых устройствах
          </BlockTitle>
        </DevicesTitleWrapper>
        <DevicesMobileImageWrapper  >
          <DevicesImage custom variants={slidingVariants} src={DevicesImg} alt="devices image" />
        </DevicesMobileImageWrapper>
        <DevicesText custom variants={slidingVariants}>
          Наш модуль доступен на все популярные ОС и работает на всех
          компьютерах.
        </DevicesText>
        <DevicesLink to="/" custom variants={slidingVariants}>
          Открыть в браузере
        </DevicesLink>
      </DevicesMain>
      <DevicesImageWrapper
        initial="hidden"
        animate={controls}
        variants={slidingVariants}
      >
        <DevicesImage src={DevicesImg} alt="devices image" />
      </DevicesImageWrapper>
    </DevicesContainer>
  );
}
