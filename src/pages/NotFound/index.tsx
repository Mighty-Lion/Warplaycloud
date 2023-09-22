import { css } from '@emotion/css';
import { NotFoundButton, NotFoundContainer } from "./index.styles";

function Index() {
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
