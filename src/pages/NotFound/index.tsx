import { css } from '@emotion/css';
import { NotFoundButton, NotFoundContainer } from './index.styles';
import { setTabTitle } from '@/functions/setTabTitle';
import ScrollToTop from '@/components/ScrollToTop';

function Index() {
  setTabTitle('Страница не найдена - Warplaycloud');

  return (
    <NotFoundContainer>
      <ScrollToTop />
      <h1
        className={css`
          margin-bottom: 20px;
          color: var(--color-white-0);
        `}
      >
        Not Found
      </h1>
      <NotFoundButton to="/">Go Home</NotFoundButton>
    </NotFoundContainer>
  );
}

export default Index;
