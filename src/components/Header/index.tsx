import { HeaderContainer, HeaderWrapper } from './index.styles';
import { Container } from '@/components/Layout/index.styles';
import {Navbar} from "./partials/Navbar";

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
