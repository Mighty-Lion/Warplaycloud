import React from 'react';
import { ServiceSlider } from '@/components/ServiceSlider';
import { Line } from '@/components/Line/index.styles';
import { Content } from "@/components/Content";

export default function Home() {
  return (
    <>
      <ServiceSlider />
      <Line
        bottom="-98px"
        left="50%"
        width="1px"
        height="132px"
        translateX="-50%"
        BGC="#FFF"
      />
      <Content />
    </>
  );
}
