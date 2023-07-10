import {
  NavbarList,
  NavbarLogo,
} from '@/components/Header/partials/Navbar/index.styles';
import LogoBlue from '../../../../assets/images/svg/logo-blue.svg';
import { Navigation } from '@/components/Navigation';

export function Navbar() {
  return (
    <NavbarList>
      <NavbarLogo src={LogoBlue} alt="logo" />
      <Navigation />
    </NavbarList>
  );
}
