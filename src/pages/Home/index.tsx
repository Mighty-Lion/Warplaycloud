import React from 'react';
import { ServiceSlider } from '@/components/ServiceSlider';
import { Line } from '@/components/Line/index.styles';
import { Content } from '@/components/Content';
import { Devices } from "@/components/Devices";
import { Locations } from "@/components/Locations";

export default function Home() {
  return (
    <>
      <Content />
      <Devices />
      <Locations />
    </>
  );
}
