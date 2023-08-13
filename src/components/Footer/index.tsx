import {
  FooterAuthorImg,
  FooterContainer,
  FooterCookie,
  FooterDesignImg,
  FooterLinks,
  FooterLogo,
  FooterLogos,
  FooterPolitics,
  FooterSocialImg,
  FooterSocialLink,
  FooterSocials,
  FooterWrapper,
} from '@/components/Footer/index.styles';

import Logo from '@/assets/images/svg/footer-logo.svg';
import Author from '@/assets/images/svg/author.svg';
import Design from '@/assets/images/svg/design.svg';
import VK from '@/assets/images/svg/vk-white.svg';
import Discord from '@/assets/images/svg/discord-white.svg';
import Youtube from '@/assets/images/svg/youtube-white.svg';

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
            <FooterSocialLink href="#">
              <FooterSocialImg src={VK} alt="vk logo" />
            </FooterSocialLink>
            <FooterSocialLink href="#">
              <FooterSocialImg src={Discord} alt="discord logo" />
            </FooterSocialLink>
            <FooterSocialLink href="#">
              <FooterSocialImg src={Youtube} alt="youtube logo" />
            </FooterSocialLink>
          </FooterSocials>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
}
