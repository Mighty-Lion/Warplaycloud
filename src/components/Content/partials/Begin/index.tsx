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
export function Begin() {
  return (
    <BeginContainer>
      <BeginThemeWrapper>
        <BlockTheme variants={cloudVariants}>Быстрый старт</BlockTheme>
      </BeginThemeWrapper>
      <BlockTitle
        marginBottom="93px"
        mobileMarginBottom="87px"
        variants={cloudVariants}
      >
        Начни играть
      </BlockTitle>
      <BeginGuide>
        <BeginElement>
          <BeginIconWrapper mobileWidth="51px" mobileHeight="51px">
            <BeginIcon src={CreateAcc} alt="" />
          </BeginIconWrapper>
          <BeginText>Cоздайте аккаунт</BeginText>
        </BeginElement>
        <BeginLine />
        <BeginElement>
          <BeginIconWrapper mobileWidth="51px" mobileHeight="51px">
            <BeginIcon src={DownloadTheModule} alt="" />
          </BeginIconWrapper>
          <BeginText> Cкачайте модуль </BeginText>
        </BeginElement>
        <BeginLine desktop />
        <BGLineWrapper>
          <BGLine />
        </BGLineWrapper>
        <BeginElement>
          <BeginIconWrapper mobileWidth="57px" mobileHeight="57px">
            <BeginIcon src={Choose} alt="" />
          </BeginIconWrapper>
          <BeginText> Выберите тариф </BeginText>
        </BeginElement>
        <BeginLine />
        <BeginElement>
          <BeginIconWrapper mobileWidth="57px" mobileHeight="57px">
            <BeginIcon src={StartPlaying} alt="" />
          </BeginIconWrapper>
          <BeginText> Начни играть</BeginText>
        </BeginElement>
      </BeginGuide>
      <BeginLink to="/">Начать</BeginLink>
    </BeginContainer>
  );
}
