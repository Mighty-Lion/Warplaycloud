import React, { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Container, Wrapper } from './index.styles';
import { Footer } from '../Footer';
import { Menu } from '@/components/Menu';
import { MenuButton } from '@/components/ServiceSlider/partials/MenuButton';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Menu />
      <MenuButton />
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </Wrapper>
  );
}
