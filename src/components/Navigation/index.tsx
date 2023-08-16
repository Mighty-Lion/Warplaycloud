import { useState } from 'react';
import { NavBtn } from '@/components/Navigation/partials/NavBtn';
import { Nav, NavTab } from '@/components/Navigation/index.styles';

const tabs = [
  { id: '0', label: 'Главная' },
  { id: '1', label: 'Сервера' },
  { id: '2', label: 'Скачать' },
  { id: '3', label: 'Открыть в браузере' },
  { id: '4', label: 'Цены' },
  { id: '5', label: 'Тех поддержка' },
  { id: '6', label: 'Контакты' },
];

export interface INavBtnProps {
  onClick?: () => void;
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
        <NavBtn key={tab.id} onClick={() => handleScrolling(tab.id)}>
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
