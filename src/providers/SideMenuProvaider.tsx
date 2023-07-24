import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

export interface ISideMenuContextProps {
  isOpenMenu?: boolean;
  openMenu?: () => void;
  dismissMenu?: () => void;
}

export const SideMenuContext = createContext<ISideMenuContextProps>(null!);
export function SideMenuProvaider({ children }: PropsWithChildren) {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const openMenu = useCallback(() => {
    setOpenMenu(true);
  }, [setOpenMenu]);

  const dismissMenu = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  return (
    <SideMenuContext.Provider value={{ isOpenMenu, openMenu, dismissMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
}