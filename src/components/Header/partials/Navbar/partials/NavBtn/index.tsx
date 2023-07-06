import { PropsWithChildren } from 'react';
import { NavbarButton } from '@/components/Header/partials/Navbar/partials/NavBtn/index.styles';
import { INavBtnProps } from '@/components/Header/partials/Navbar';

export function NavBtn({ onClick, children }: PropsWithChildren<INavBtnProps>) {
  return <NavbarButton onClick={onClick}>{children}</NavbarButton>;
}
