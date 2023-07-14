import { BigLogo } from '@/components/SliderLogo';
import {
  DismissBtn,
  MenuContainer,
  MenuWrapper,
} from '@/components/Menu/insex.styles';
import { useSideMenu } from '@/hooks/useSideMenu';
import { Navigation } from '@/components/Navigation';
import { Socials } from '@/components/Socials';

export function Menu() {
  const { isOpenMenu, dismissMenu } = useSideMenu();

  return (
    <MenuWrapper isOpenMenu={isOpenMenu}>
      <MenuContainer>
        <BigLogo />
        <Navigation />
        <Socials />
        <DismissBtn onClick={dismissMenu}>
          <svg
            width="22"
            height="38"
            viewBox="0 0 22 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.23223 17.2322C0.255923 18.2085 0.255923 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85787C21.654 3.88156 21.654 2.29864 20.6777 1.32233C19.7014 0.346022 18.1184 0.346022 17.1421 1.32233L1.23223 17.2322ZM4 16.5H3V21.5H4V16.5Z"
              fill="white"
            />
          </svg>
        </DismissBtn>
      </MenuContainer>
    </MenuWrapper>
  );
}
