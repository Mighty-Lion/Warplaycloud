import { PropsWithChildren } from 'react';
import { NavbarButton } from '@/components/Navigation/partials/NavBtn/index.styles';
import { INavBtnProps } from '@/components/Navigation';

export function NavBtn({ onClick, to, children }: PropsWithChildren<INavBtnProps>) {
  return <NavbarButton to={to} onClick={onClick}>{children}</NavbarButton>;
}
