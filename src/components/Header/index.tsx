import { HeaderWrapper } from './index.styles';
import { Container } from '../Layout/index.styles';
import { Navbar } from '@/components/Navbar';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Navbar />
      </Container>
    </HeaderWrapper>
  );
}
