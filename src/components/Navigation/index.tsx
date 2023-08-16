import { MutableRefObject, useState } from 'react';
import { NavBtn } from '@/components/Navigation/partials/NavBtn';
import { Nav, NavTab } from '@/components/Navigation/index.styles';
import { useAllRef } from '@/hooks/useAllRef';

export interface INavBtnProps {
  onClick?: () => void;
  to: string;
  pointer?: MutableRefObject<null>;
}

interface INavigationProps {
  tabId: string;
}
interface IHandleScrollingProps {
  id: string;
  pointer?: MutableRefObject<null>;
}

export function Navigation({ tabId }: INavigationProps) {
  const { refCloud, refBegin, refRates, refDevices } = useAllRef();
  const tabs = [
    { id: '0', label: 'Главная', to: '/', pointer: refCloud },
    { id: '1', label: 'Сервера', to: '/', pointer: refCloud },
    { id: '2', label: 'Скачать', to: '/', pointer: refBegin },
    { id: '3', label: 'Открыть в браузере', to: '/', pointer: refDevices },
    { id: '4', label: 'Цены', to: '/', pointer: refRates },
    { id: '5', label: 'Тех поддержка', to: '/', pointer: refCloud },
    { id: '6', label: 'Контакты', to: '/', pointer: refCloud },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleScrolling = (id: string, pointer: MutableRefObject<null>) => {
    setActiveTab(id);
    window.scrollTo({ top: 0 });
  };

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
