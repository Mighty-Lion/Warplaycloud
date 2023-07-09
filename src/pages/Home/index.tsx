import React, { useState } from 'react';
import { ServiceSlider } from '../../components/ServiceSlider';
import { Line } from '@/components/Line/index.styles';
import { Menu } from '@/components/Menu';

export interface IMenuProps {
  isOpenMenu: boolean;
  setIsOpenMenu?: React.Dispatch<boolean>;
}

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <ServiceSlider isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <Menu isOpenMenu={isOpenMenu} />
      <Line
        bottom="-98px"
        left="50%"
        width="1px"
        height="132px"
        translateX="-50%"
        BGC="#FFF"
        desktop
      />
    </>
  );
}
