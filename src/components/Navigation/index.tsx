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
export function Navigation() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Nav>
      {tabs.map((tab) => (
        <NavBtn key={tab.id} onClick={() => setActiveTab(tab.id)}>
          {activeTab === tab.id && (
            <NavTab
              layoutId="underline"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </NavBtn>
      ))}
    </Nav>
  );
}
