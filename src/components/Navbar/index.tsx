import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  NavbarList,
  NavbarRight,
  NavbarTab,
} from '@/components/Navbar/index.styles';
import LogoBlue from '../../assets/images/svg/logo-blue.svg';
import { NavBtn } from '@/components/Navbar/partials/NavBtn';

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
export function Navbar() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <NavbarList>
      <Link to="/">
        <img src={LogoBlue} alt="logo" />
      </Link>
      <NavbarRight>
        {tabs.map((tab) => (
          <NavBtn key={tab.id} onClick={() => setActiveTab(tab.id)}>
            {activeTab === tab.id && (
              <NavbarTab
                layoutId="underline"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </NavBtn>
        ))}
      </NavbarRight>
    </NavbarList>
  );
}
