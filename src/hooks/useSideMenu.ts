import { useContext } from 'react';
import { SideMenuContext } from '@/providers/SideMenuProvider';

export function useSideMenu() {
  const value = useContext(SideMenuContext);

  return value;
}
