import { PropsWithChildren } from 'react';
import { NavbarButton } from '@/components/Navigation/partials/NavBtn/index.styles';
import { INavBtnProps } from '@/components/Navigation';

export function NavBtn({ onClick, children }: PropsWithChildren<INavBtnProps>) {
  return <NavbarButton onClick={onClick}>{children}</NavbarButton>;
}
