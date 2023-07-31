import { MotionProps, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  CloudContainer,
  CloudImg,
  CloudImgWrapper,
  CloudLink,
  CloudRightWrapper,
  CloudTheme,
  CloudTitle,
} from '@/components/Content/partials/Cloud/index.styles';
import CloudImage from '@/assets/images/png/cloud.png';
import { CloudDescription } from "@/components/Content/partials/Cloud/partials/CloudDescription";

const cloudVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  },
  hidden: (custom: boolean) => ({
    opacity: 0,
    x: custom ? '-100vw' : '100vw',
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  }),
};
export function Cloud() {
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
    <CloudContainer ref={ref}>
      <CloudImgWrapper
        initial="hidden"
        animate={controls}
        custom
        variants={cloudVariants}
        desktop
      >
        <CloudImg src={CloudImage} />
      </CloudImgWrapper>
      <CloudRightWrapper
        initial="hidden"
        animate={controls}
        variants={cloudVariants}
      >
        <CloudTheme variants={cloudVariants}>Облачный гейминг</CloudTheme>
        <CloudTitle variants={cloudVariants}>Как это работает</CloudTitle>
        <CloudDescription variants={cloudVariants}>
          Наши сервера запускают игру, и передают вам картинку, которой вы
          можете управлять в реальном времени!
        </CloudDescription>
        <CloudImgWrapper variants={cloudVariants} layoutId="mobile" mobile>
          <CloudImg src={CloudImage} />
        </CloudImgWrapper>
        <CloudDescription variants={cloudVariants}>
          Приложение запустится на ПК с процессором от 1.5 GHz , от 1 Gb RAM и
          доступом в интернет от 15 мбит/с на всех операционых системах Windows
          7, 8, 10 MacOS и Linux .
        </CloudDescription>
        <CloudLink to="/" variants={cloudVariants}>
          Загрузить
        </CloudLink>
      </CloudRightWrapper>
    </CloudContainer>
  );
}
