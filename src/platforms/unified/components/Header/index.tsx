import { HeaderContainer, HeaderWrapper } from './index.styles';
import { Navbar } from '@/platforms/unified/components/Navbar';
import { Container } from '@/platforms/unified/components/Layout/index.styles';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}
