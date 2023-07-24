import { useScroll } from 'framer-motion';
import { HeaderContainer, HeaderWrapper } from './index.styles';
import { Container } from '@/components/Layout/index.styles';
import { Navbar } from './partials/Navbar';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  const scrollTest = useScroll();
  console.log(scrollTest);
  return (
    <HeaderWrapper
    // initial={{ background: 'transparent' }}
    // whileFocus={{ background: 'black' }}
    // onScroll={{ background: 'black' }}
    >
      <Container>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}
