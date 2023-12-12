import { css } from '@emotion/css';
import { NotFoundButton, NotFoundContainer } from './index.styles';
import { setTabTitle } from '@/functions/setTabTitle';

function Index() {
  setTabTitle('Страница не найдена - Warplaycloud');

  return (
    <NotFoundContainer>
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
