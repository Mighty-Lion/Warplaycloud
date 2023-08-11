import { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import {
  BeginGuide,
  BeginElement,
  BeginIconWrapper,
  BeginLine,
  BeginText,
  BeginLink,
  BeginContainer,
  BeginThemeWrapper,
  BeginIcon,
  BGLine,
  BGLineWrapper,
} from '@/components/Content/partials/Begin/index.styles';
import { BlockTitle } from '@/components/BlockTitle';
import { BlockTheme } from '@/components/BlockTheme';

import CreateAcc from '@/assets/images/svg/createAcc.svg';
import StartPlaying from '@/assets/images/svg/start-playing.svg';
import DownloadTheModule from '@/assets/images/svg/download-the-module.svg';
import Choose from '@/assets/images/svg/choose.svg';

const beginVariants = {
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
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const guideVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  },
};
export function Begin() {
  const refBegin = useRef(null);
  const isInViewBegin = useInView(refBegin, { once: true });
  const controlsBegin = useAnimation();

  const refGuide = useRef(null);
  const isInViewGuide = useInView(refGuide, { once: true });
  const controlsGuide = useAnimation();

  useEffect(() => {
    if (isInViewBegin) {
      console.log('Element is in view: ', isInViewBegin);
      controlsBegin.start('visible');
    }
  }, [controlsBegin, isInViewBegin]);

  useEffect(() => {
    if (isInViewGuide) {
      console.log('Element is in view: ', isInViewGuide);
      controlsGuide.start('visible');
    }
  }, [controlsGuide, isInViewGuide]);

  return (
    <div ref={refBegin}>
      <BeginContainer
        initial="hidden"
        animate={controlsBegin}
        variants={beginVariants}
      >
        <BeginThemeWrapper>
          <BlockTheme variants={beginVariants}>Быстрый старт</BlockTheme>
        </BeginThemeWrapper>
        <BlockTitle
          marginBottom="93px"
          mobileMarginBottom="87px"
          variants={beginVariants}
        >
          Начни играть
        </BlockTitle>
        <motion.div variants={beginVariants}>
          <BeginGuide
            initial="hidden"
            animate={controlsGuide}
            variants={guideVariants}
            ref={refGuide}
          >
            <BeginElement variants={guideVariants}>
              <BeginIconWrapper mobileWidth="51px" mobileHeight="51px">
                <BeginIcon src={CreateAcc} alt="" />
              </BeginIconWrapper>
              <BeginText>Cоздайте аккаунт</BeginText>
            </BeginElement>
            <BeginLine variants={guideVariants} />
            <BeginElement variants={guideVariants}>
              <BeginIconWrapper mobileWidth="51px" mobileHeight="51px">
                <BeginIcon src={DownloadTheModule} alt="" />
              </BeginIconWrapper>
              <BeginText> Cкачайте модуль </BeginText>
            </BeginElement>
            <BeginLine desktop variants={guideVariants} />
            <BGLineWrapper variants={guideVariants}>
              <BGLine />
            </BGLineWrapper>
            <BeginElement variants={guideVariants}>
              <BeginIconWrapper mobileWidth="57px" mobileHeight="57px">
                <BeginIcon src={Choose} alt="" />
              </BeginIconWrapper>
              <BeginText> Выберите тариф </BeginText>
            </BeginElement>
            <BeginLine variants={guideVariants} />
            <BeginElement variants={guideVariants}>
              <BeginIconWrapper mobileWidth="57px" mobileHeight="57px">
                <BeginIcon src={StartPlaying} alt="" />
              </BeginIconWrapper>
              <BeginText> Начни играть</BeginText>
            </BeginElement>
          </BeginGuide>
        </motion.div>
        <BeginLink to="/" variants={beginVariants}>
          Начать
        </BeginLink>
      </BeginContainer>
    </div>
  );
}
