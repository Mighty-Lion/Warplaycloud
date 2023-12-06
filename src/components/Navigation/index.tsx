import { MutableRefObject } from 'react';
import { NavBtn } from '@/components/Navigation/partials/NavBtn';
import { Nav, NavTab } from '@/components/Navigation/index.styles';
import { useSideMenu } from '@/hooks/useSideMenu';
import { useAllRef } from '@/hooks/useAllRef';
import useChangeUrl from '@/hooks/useChangeUrl';

export interface INavBtnProps {
  onClick?: () => void;
  to: string;
  pointer?: MutableRefObject<null>;
}

interface INavigationProps {
  tabId: string;
}

export function Navigation({ tabId }: INavigationProps) {
  const { refSlider, refCloud, refBegin, refRates, refDevices } = useAllRef();
  const { dismissMenu } = useSideMenu();
  const tabs = [
    { id: '0', label: 'Главная', to: '/#main' },
    { id: '1', label: 'Сервера', to: '/#cloud' },
    { id: '2', label: 'Скачать', to: '/#download' },
    { id: '3', label: 'Цены', to: '/#prices' },
    { id: '4', label: 'Открыть в браузере', to: '/#devices' },
    { id: '5', label: 'Тех поддержка', to: '/support' },
    { id: '6', label: 'Контакты', to: '/contacts' },
  ];

  useChangeUrl(refSlider, '/', '/#main');
  useChangeUrl(refCloud, '/', '/#cloud');
  useChangeUrl(refBegin, '/', '/#download');
  useChangeUrl(refRates, '/', '/#prices');
  useChangeUrl(refDevices, '/', '/#devices');

  const lastPathname = window.location.pathname + window.location.hash;

  return (
    <Nav>
      {tabs.map((tab) => (
        <NavBtn
          to={tab.to}
          key={tab.id}
          onClick={() => dismissMenu && dismissMenu()}
        >
          {lastPathname === tab.to && (
            <NavTab
              layoutId={tabId}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </NavBtn>
      ))}
    </Nav>
  );
}
