import { MutableRefObject, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { NavBtn } from '@/components/Navigation/partials/NavBtn';
import { Nav, NavTab } from '@/components/Navigation/index.styles';
import { useSideMenu } from '@/hooks/useSideMenu';
import { useAllRef } from '@/hooks/useAllRef';
import useElementOnScreen from '@/hooks/useElementOnScreen';

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

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const location = useLocation();

  const isInSightSlider = useElementOnScreen(refSlider, '/');
  const isInSightCloud = useElementOnScreen(refCloud, '/');
  const isInSightBegin = useElementOnScreen(refBegin, '/');
  const isInSightRates = useElementOnScreen(refRates, '/');
  const isInSightDevices = useElementOnScreen(refDevices, '/');

  useEffect(() => {
    if (isInSightSlider) {
      setActiveTab(tabs[0].id);
      history.pushState({}, '', '#main');
    }
  }, [isInSightSlider]);

  useEffect(() => {
    if (isInSightCloud) {
      setActiveTab(tabs[1].id);
      history.pushState({}, '', '#cloud');
    }
  }, [isInSightCloud]);

  useEffect(() => {
    if (isInSightBegin) {
      setActiveTab(tabs[2].id);
      history.pushState({}, '', '#download');
    }
  }, [isInSightBegin]);

  useEffect(() => {
    if (isInSightRates) {
      setActiveTab(tabs[3].id);
      history.pushState({}, '', '#prices');
    }
  }, [isInSightRates]);

  useEffect(() => {
    if (isInSightDevices) {
      setActiveTab(tabs[4].id);
      history.pushState({}, '', '#devices');
    }
  }, [isInSightDevices]);

  useEffect(() => {
    if (location.pathname === '/contacts') setActiveTab(tabs[6].id);
  }, [location]);

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
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </NavBtn>
      ))}
    </Nav>
  );
}
