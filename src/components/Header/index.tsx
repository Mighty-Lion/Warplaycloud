import { useWindowScroll } from 'react-use';
import { useEffect, useState } from 'react';
import { HeaderContainer, HeaderWrapper } from './index.styles';
import { Container } from '@/components/Layout/index.styles';
import { Navbar } from './partials/Navbar';

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
    <HeaderWrapper atop={atop}>
      <Container>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}
