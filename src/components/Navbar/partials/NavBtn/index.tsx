import { PropsWithChildren } from 'react';
import { NavbarButton } from '@/components/Navbar/partials/NavBtn/index.styles';
import { INavBtnProps } from '@/components/Navbar';

export function NavBtn({ onClick, children }: PropsWithChildren<INavBtnProps>) {
  return <NavbarButton onClick={onClick}>{children}</NavbarButton>;
}
