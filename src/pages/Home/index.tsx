import React, { useState } from 'react';
import { ServiceSlider } from '@/components/ServiceSlider';
import { Line } from '@/components/Line/index.styles';

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <ServiceSlider isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <Line
        bottom="-98px"
        left="50%"
        width="1px"
        height="132px"
        translateX="-50%"
        BGC="#FFF"
      />
    </>
  );
}
