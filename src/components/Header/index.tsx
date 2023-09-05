import { useWindowScroll } from 'react-use';
import React, { useEffect, useState } from 'react';
import { HeaderContainer, HeaderWrapper } from './index.styles';
import { Container } from '@/components/Layout/index.styles';
import { Navbar } from './partials/Navbar';
import { ServiceSlider } from '@/components/ServiceSlider';
import { Line } from '@/components/Line/index.styles';

export function Header() {
  const [atop, setAtop] = useState(false);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (y >= 100) setAtop(true);
    else {
      setAtop(false);
    }
  }, [y]);

  return (
    <>
      <HeaderWrapper atop={atop}>
        <Container>
          <HeaderContainer>
            <Navbar />
          </HeaderContainer>
        </Container>
      </HeaderWrapper>
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
    </>
  );
}
