import { useWindowScroll } from 'react-use';
import { useRef } from 'react';
import { HeaderContainer, HeaderWrapper } from './index.styles';
import { Container } from '@/components/Layout/index.styles';
import { Navbar } from './partials/Navbar';

export function Header() {
  const header = useRef(null);
  const { y } = useWindowScroll();
  console.log(header.current)
  if (y >= 200) {
    console.log('>200');
    header!.current!.backgroundColor = 'red';
  }

  return (
    <HeaderWrapper className="header" ref={header}>
      <Container>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}
