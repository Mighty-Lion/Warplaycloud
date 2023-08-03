import {
  BeginGuide,
  BeginElement,
  BeginIconsWrapper,
  BeginLine,
  BeginText,
  BeginLink,
  BeginContainer,
  BeginThemeWrapper,
  BeginTitleWrapper,
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
      <BeginTitleWrapper>
        <BlockTitle
          marginBottom="85px"
          mobileMarginBottom="89px"
          variants={cloudVariants}
        >
          Начни играть
        </BlockTitle>
      </BeginTitleWrapper>
      <BeginGuide>
        <BeginElement>
          <BeginIconsWrapper>
            <img src={CreateAcc} alt="" />
          </BeginIconsWrapper>
          <BeginText>Cоздайте аккаунт</BeginText>
        </BeginElement>
        <BeginLine />
        <BeginElement>
          <BeginIconsWrapper>
            <img src={DownloadTheModule} alt="" />
          </BeginIconsWrapper>
          <BeginText> Cкачайте модуль </BeginText>
        </BeginElement>
        <BeginLine />
        <BeginElement>
          <BeginIconsWrapper>
            <img src={Choose} alt="" />
          </BeginIconsWrapper>
          <BeginText> Выберите тариф </BeginText>
        </BeginElement>
        <BeginLine />
        <BeginElement>
          <BeginIconsWrapper>
            <img src={StartPlaying} alt="" />
          </BeginIconsWrapper>
          <BeginText> Начни играть</BeginText>
        </BeginElement>
      </BeginGuide>
      <BeginLink to="/">Начать</BeginLink>
    </BeginContainer>
  );
}
