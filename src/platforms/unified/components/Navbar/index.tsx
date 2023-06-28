import {
  NavbarList,
  NavbarLink,
  NavbarRight,
} from '@/platforms/unified/components/Navbar/index.styles';
import LogoBlue from '../../assets/images/svg/logo-blue.svg';

export function Navbar() {
  return (
    <NavbarList>
      <NavbarLink to="/">
        <img src={LogoBlue} alt="logo" />
      </NavbarLink>
      <NavbarRight>
        <NavbarLink to="/">Главная</NavbarLink>
        <NavbarLink to="/">Сервера</NavbarLink>
        <NavbarLink to="/">Скачать</NavbarLink>
        <NavbarLink to="/">Открыть в браузере</NavbarLink>
        <NavbarLink to="/">Цены</NavbarLink>
        <NavbarLink to="/">Тех поддержка</NavbarLink>
        <NavbarLink to="/">Контакты</NavbarLink>
      </NavbarRight>
    </NavbarList>
  );
}
