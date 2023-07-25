import { HeaderContainer, HeaderWrapper } from './index.styles';
import { Container } from '@/components/Layout/index.styles';
import { Navbar } from './partials/Navbar';

export function Header() {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos: any) {
    const selector = document.body.querySelector('header');
    if (scrollPos >= 100) {
      selector!.style.backgroundColor = 'var(--color-black-700)';
    } else {
      selector!.style.backgroundColor = 'transparent';
    }
  }

  document.addEventListener('scroll', (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
  return (
    <HeaderWrapper className="header">
      <Container>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}
