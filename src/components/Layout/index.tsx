import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { ContentWrapper, Wrapper } from './index.styles';
import { Footer } from '../Footer';
import { Menu } from '@/components/Menu';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Header />
      <Menu />
      <ContentWrapper as="main">{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
