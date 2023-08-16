import { useState } from 'react';
import { NavBtn } from '@/components/Navigation/partials/NavBtn';
import { Nav, NavTab } from '@/components/Navigation/index.styles';

const tabs = [
  { id: '0', label: 'Главная', to: '/' },
  { id: '1', label: 'Сервера', to: '/' },
  { id: '2', label: 'Скачать', to: '/' },
  { id: '3', label: 'Открыть в браузере', to: '/' },
  { id: '4', label: 'Цены', to: '/' },
  { id: '5', label: 'Тех поддержка', to: '/' },
  { id: '6', label: 'Контакты', to: '/' },
];

export interface INavBtnProps {
  onClick?: () => void;
  to: string;
}

interface INavigationProps {
  tabId: string;
}
export function Navigation({ tabId }: INavigationProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleScrolling = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0 });
  };

  return (
    <Nav>
      {tabs.map((tab) => (
        <NavBtn
          to={tab.to}
          key={tab.id}
          onClick={() => handleScrolling(tab.id)}
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
