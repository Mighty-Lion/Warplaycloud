import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { ContentWrapper, Wrapper } from './index.styles';
import { Footer } from '../Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper as="main">{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
