import {
  SocialsContainer,
  SocialsLink,
} from '@/components/Socials/index.styles';
import VK from '@/assets/images/svg/vk-gray.svg';
import Discord from '@/assets/images/svg/discord-gray.svg';
import Youtube from '@/assets/images/svg/youtube-gray.svg';

export function Socials() {
  return (
    <SocialsContainer>
      <SocialsLink href="https://vk.com">
        <img src={VK} alt="vk icon" />
      </SocialsLink>
      <SocialsLink href="https://discord.com">
        <img src={Discord} alt="Discord icon" />
      </SocialsLink>
      <SocialsLink href="https://youtube.com">
        <img src={Youtube} alt="Youtube icon" />
      </SocialsLink>
    </SocialsContainer>
  );
}
