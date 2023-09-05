import VK from '@/assets/images/svg/vk-white.svg';
import Discord from '@/assets/images/svg/discord-white.svg';
import Youtube from '@/assets/images/svg/youtube-white.svg';
import { SocialsContainer } from '@/components/SocialsSmall/index.styles';

export function SocialsSmall() {
  return (
    <SocialsContainer>
      <a href="#top">
        <img src={VK} alt="vk logo" />
      </a>
      <a href="#top">
        <img src={Discord} alt="discord logo" />
      </a>
      <a href="#top">
        <img src={Youtube} alt="youtube logo" />
      </a>
    </SocialsContainer>
  );
}
