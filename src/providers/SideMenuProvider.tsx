import { createContext, PropsWithChildren, useCallback, useState } from 'react';

export interface ISideMenuContextProps {
  isOpenMenu?: boolean;
  openMenu?: () => void;
  dismissMenu?: () => void;
}

export const SideMenuContext = createContext<ISideMenuContextProps>(null!);
export function SideMenuProvaider({ children }: PropsWithChildren) {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const body = document.querySelector('body');
  const openMenu = useCallback(() => {
    setOpenMenu(true);
    body!.style.overflow = 'hidden';
  }, [setOpenMenu]);

  const dismissMenu = useCallback(() => {
    setOpenMenu(false);
    body!.style.overflow = 'visible';
  }, [setOpenMenu]);

  return (
    <SideMenuContext.Provider value={{ isOpenMenu, openMenu, dismissMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
}
