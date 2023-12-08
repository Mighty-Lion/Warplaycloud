import { MutableRefObject, useEffect, useState } from 'react';
import { NavBtn } from '@/components/Navigation/partials/NavBtn';
import { Nav, NavTab } from '@/components/Navigation/index.styles';
import { useSideMenu } from '@/hooks/useSideMenu';
import { useAllRef } from '@/hooks/useAllRef';
import useChangeUrl from '@/hooks/useChangeUrl';
import {getDeviceType} from "@/functions/getDeviceType";

export interface INavBtnProps {
  onClick?: () => void;
  to: string;
  pointer?: MutableRefObject<null>;
}

interface INavigationProps {
  tabId: string;
}

export function Navigation({ tabId }: INavigationProps) {
  const { refSlider, refCloud, refBegin, refRates, refRates2, refDevices } =
    useAllRef();
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

  const isOnScreenSlider = useChangeUrl(refSlider, '/', '/#main');
  const isOnScreenCloud = useChangeUrl(refCloud, '/', '/#cloud');
  const isOnScreenDowload = useChangeUrl(refBegin, '/', '/#download');
  const isOnScreenPrices = useChangeUrl(refRates, '/', '/#prices');
  const isOnScreenPrices2 = useChangeUrl(refRates2, '/', '/#prices');
  const isOnScreenDevices = useChangeUrl(refDevices, '/', '/#devices');

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const deviceType = getDeviceType();

  useEffect(() => {
    if (isOnScreenSlider) setActiveTab(tabs[0].id);
  }, [isOnScreenSlider]);

  useEffect(() => {
    if (isOnScreenCloud) setActiveTab(tabs[1].id);
  }, [isOnScreenCloud]);

  useEffect(() => {
    if (isOnScreenDowload) setActiveTab(tabs[2].id);
  }, [isOnScreenDowload]);

  useEffect(() => {
    if (location.hash === '#prices') setActiveTab(tabs[3].id);
  }, [location.hash]);

  useEffect(() => {
    if (isOnScreenPrices && deviceType === 'desktop') setActiveTab(tabs[3].id);
    if (isOnScreenPrices2 && deviceType === 'mobile') setActiveTab(tabs[3].id);
  }, [isOnScreenPrices, isOnScreenPrices2, deviceType]);

  useEffect(() => {
    if (isOnScreenDevices) setActiveTab(tabs[4].id);
  }, [isOnScreenDevices]);

  useEffect(() => {
    if (location.pathname === '/support') setActiveTab(tabs[5].id);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/contacts') setActiveTab(tabs[6].id);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash === '#main') setActiveTab(tabs[0].id);
  }, [location.hash]);

  return (
    <Nav>
      {tabs.map((tab) => (
        <NavBtn
          to={tab.to}
          key={tab.id}
          onClick={() => dismissMenu && dismissMenu()}
        >
          {activeTab === tab.id && (
            <NavTab
              layoutId={tabId}
              transition={{ bounce: 0.2, duration: 0.6, delay: 0.1 }}
            />
          )}
          {tab.label}
        </NavBtn>
      ))}
    </Nav>
  );
}
