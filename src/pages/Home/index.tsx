import React from 'react';
import { ServiceSlider } from '@/components/ServiceSlider';
import { Line } from '@/components/Line/index.styles';
import { Content } from '@/components/Content';
import { Devices } from '@/components/Devices';
import { Locations } from '@/components/Locations';
import { MenuButton } from '@/components/ServiceSlider/partials/MenuButton';

export default function Home() {
  return (
    <>
      <MenuButton />
      <ServiceSlider />
      <Line
        top="768px"
        mobileTop="710px"
        left="50%"
        width="1px"
        height="132px"
        translateX="-50%"
        BGC="#FFF"
        mobile
      />
      <Content />
      <Devices />
      <Locations />
    </>
  );
}
