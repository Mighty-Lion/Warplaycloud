import {
  FooterAuthorImg,
  FooterContainer,
  FooterCookie,
  FooterDesignImg,
  FooterLinks,
  FooterLogo,
  FooterLogos,
  FooterPolitics,
  FooterSocials,
  FooterWrapper,
} from '@/components/Footer/index.styles';

import Logo from '@/assets/images/svg/footer-logo.svg';
import Author from '@/assets/images/svg/author.svg';
import Design from '@/assets/images/svg/design.svg';
import { SocialsSmall } from "@/components/SocialsSmall";

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogos>
          <FooterLogo src={Logo} alt="logo" />
          <FooterAuthorImg src={Author} alt="author logo" />
          <FooterDesignImg src={Design} alt="designer logo" />
        </FooterLogos>
        <FooterLinks>
          <FooterPolitics href="#">Политика конфиденциальности</FooterPolitics>
          <FooterCookie href="#">Файлы Cookie</FooterCookie>
          <FooterSocials>
            <SocialsSmall />
          </FooterSocials>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
}
