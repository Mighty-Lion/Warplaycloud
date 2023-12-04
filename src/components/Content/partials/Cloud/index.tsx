import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  CloudContainer,
  CloudImg,
  CloudImgWrapper,
  CloudLink,
  CloudRightWrapper,
  CloudThemeWrapper,
} from '@/components/Content/partials/Cloud/index.styles';
import CloudImage from '@/assets/images/png/cloud.png';
import { CloudDescription } from '@/components/Content/partials/Cloud/partials/CloudDescription';
import { BlockTheme } from '@/components/BlockTheme';
import { BlockTitle } from '@/components/BlockTitle';
import { slidingVariants } from '@/components/variants';
import { useAllRef } from '@/hooks/useAllRef';

export function Cloud() {
  const { refCloud } = useAllRef();
  const isInView = useInView(refCloud, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <CloudContainer ref={refCloud}>
      <CloudImgWrapper
        initial="hidden"
        animate={controls}
        custom
        variants={slidingVariants}
        desktop
      >
        <CloudImg src={CloudImage} />
      </CloudImgWrapper>
      <CloudRightWrapper
        initial="hidden"
        animate={controls}
        variants={slidingVariants}
      >
        <CloudThemeWrapper>
          <BlockTheme variants={slidingVariants}>Облачный гейминг</BlockTheme>
        </CloudThemeWrapper>
        <BlockTitle
          marginBottom="60px"
          mobileMarginBottom="61px"
          variants={slidingVariants}
        >
          Как это работает
        </BlockTitle>
        <CloudDescription variants={slidingVariants}>
          Наши сервера запускают игру, и передают вам картинку, которой вы
          можете управлять в реальном времени!
        </CloudDescription>
        <CloudImgWrapper variants={slidingVariants} layoutId="mobile" mobile>
          <CloudImg src={CloudImage} />
        </CloudImgWrapper>
        <CloudDescription variants={slidingVariants}>
          Приложение запустится на ПК с процессором от 1.5 GHz , от 1 Gb RAM и
          доступом в интернет от 15 мбит/с на всех операционых системах Windows
          7, 8, 10 MacOS и Linux .
        </CloudDescription>
        <CloudLink to="/download" variants={slidingVariants}>
          Загрузить
        </CloudLink>
      </CloudRightWrapper>
    </CloudContainer>
  );
}
