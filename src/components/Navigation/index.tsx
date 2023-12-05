import { MutableRefObject, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBtn } from '@/components/Navigation/partials/NavBtn';
import { Nav, NavTab } from '@/components/Navigation/index.styles';
import { useAllRef } from '@/hooks/useAllRef';
import { useSideMenu } from '@/hooks/useSideMenu';
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
  const { refSlider, refCloud, refBegin, refRates, refDevices, refContacts } =
    useAllRef();
  const { dismissMenu } = useSideMenu();
  const tabs = [
    { id: '0', label: 'Главная', to: '/', pointer: refSlider },
    { id: '1', label: 'Сервера', to: '/', pointer: refCloud },
    { id: '2', label: 'Скачать', to: '/', pointer: refBegin },
    { id: '3', label: 'Цены', to: '/', pointer: refRates },
    { id: '4', label: 'Открыть в браузере', to: '/', pointer: refDevices },
    { id: '5', label: 'Тех поддержка', to: '/', pointer: refCloud },
    { id: '6', label: 'Контакты', to: '/contacts', pointer: refContacts },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleScrolling = (
    id: string,
    pointer: MutableRefObject<HTMLDivElement>
  ) => {
    const numId = Number(id);
    if (numId < 5) {
      pointer.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }

    if (dismissMenu) {
      dismissMenu();
    }
  };

  const isInSightSlider = useElementOnScreen(refSlider, '/');
  const isInSightCloud = useElementOnScreen(refCloud, '/');
  const isInSightBegin = useElementOnScreen(refBegin, '/');
  const isInSightRates = useElementOnScreen(refRates, '/');
  const isInSightDevices = useElementOnScreen(refDevices, '/');
  const isInSightContacts = useElementOnScreen(refContacts, '/contacts');

  useEffect(() => {
    if (isInSightSlider) {
      console.log('isInSightSlider');
      setActiveTab(tabs[0].id);
    }
  }, [isInSightSlider]);

  useEffect(() => {
    if (isInSightCloud) {
      console.log('isInSightCloud');
      setActiveTab(tabs[1].id);
    }
  }, [isInSightCloud]);

  useEffect(() => {
    if (isInSightBegin) {
      console.log('isInSightBegin');
      setActiveTab(tabs[2].id);
    }
  }, [isInSightBegin]);

  useEffect(() => {
    if (isInSightRates) {
      console.log('isInSightRates');
      setActiveTab(tabs[3].id);
    }
  }, [isInSightRates]);

  useEffect(() => {
    if (isInSightDevices) {
      console.log('isInSightDevices');
      setActiveTab(tabs[4].id);
    }
  }, [isInSightDevices]);

  useEffect(() => {
    if (isInSightContacts) {
      console.log('isInSightContacts');
      setActiveTab(tabs[6].id);
    }
  }, [isInSightContacts]);

  return (
    <Nav>
      {tabs.map((tab) => (
        <NavBtn
          to={tab.to}
          key={tab.id}
          onClick={() => handleScrolling(tab.id, tab.pointer)}
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
