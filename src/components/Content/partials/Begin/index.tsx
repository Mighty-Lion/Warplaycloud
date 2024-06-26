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
import { slidingVariants } from '@/components/variants';
import { useAllRef } from '@/hooks/useAllRef';

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
  const { refBegin } = useAllRef();
  const isInViewBegin = useInView(refBegin, { once: true });
  const controlsBegin = useAnimation();

  const refGuide = useRef(null);
  const isInViewGuide = useInView(refGuide, { once: true });
  const controlsGuide = useAnimation();

  useEffect(() => {
    if (isInViewBegin) {
      controlsBegin.start('visible');
    }
  }, [controlsBegin, isInViewBegin]);

  useEffect(() => {
    if (isInViewGuide) {
      controlsGuide.start('visible');
    }
  }, [controlsGuide, isInViewGuide]);

  return (
    <section id="download">
      <div ref={refBegin}>
        <BeginContainer
          initial="hidden"
          animate={controlsBegin}
          variants={slidingVariants}
        >
          <BeginThemeWrapper>
            <BlockTheme variants={slidingVariants}>Быстрый старт</BlockTheme>
          </BeginThemeWrapper>
          <BlockTitle
            marginBottom="93px"
            mobileMarginBottom="87px"
            variants={slidingVariants}
          >
            Начни играть
          </BlockTitle>
          <motion.div variants={slidingVariants}>
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
          <BeginLink to="/download" variants={slidingVariants}>
            Начать
          </BeginLink>
        </BeginContainer>
      </div>
    </section>
  );
}
