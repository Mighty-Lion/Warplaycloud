import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Container, Wrapper } from "./index.styles";
import { Footer } from '../Footer';
import { Menu } from '@/components/Menu';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Menu />
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </Wrapper>
  );
}
