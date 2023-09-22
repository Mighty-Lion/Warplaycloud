import {
  AuthLink,
  AuthSocialsContainer,
  AuthSocialsImg,
  AuthSocialsMain,
  AuthSocialsTitle,
} from '@/components/AuthSocials/index.styles';
import MailImg from '@/assets/images/svg/mail-ru-colored.svg';
import VkImg from '@/assets/images/svg/vk-colored.svg';
import OkImg from '@/assets/images/svg/ok-colored.svg';
import FbImg from '@/assets/images/svg/facebook-colored.svg';
import GoogleImg from '@/assets/images/svg/google-colored.svg';
import TwitchImg from '@/assets/images/svg/twitter-colored.svg';
import TwitterImg from '@/assets/images/svg/mail-ru-colored.svg';
import AppleImg from '@/assets/images/svg/apple-colored.svg';

const socialsArr = [
  { img: MailImg, area: 'mail' },
  { img: VkImg, area: 'vk' },
  { img: OkImg, area: 'ok' },
  { img: FbImg, area: 'fb' },
  { img: GoogleImg, area: 'google' },
  { img: TwitchImg, area: 'twitch' },
  { img: TwitterImg, area: 'twitter' },
  { img: AppleImg, area: 'apple' },
];
export function AuthSocials() {
  const mappedSocials = socialsArr.map((item) => (
    <AuthLink href="#" gridArea={item.area} key={item.area + item.img}>
      <AuthSocialsImg src={item.img} />
    </AuthLink>
  ));
  return (
    <AuthSocialsContainer>
      <AuthSocialsTitle>Войти через</AuthSocialsTitle>
      <AuthSocialsMain>{mappedSocials}</AuthSocialsMain>
    </AuthSocialsContainer>
  );
}
