import styled from '@emotion/styled';

export const CloudContainer = styled.div`
  display: grid;
  grid-auto-flow: initial;
`;
export const CloudImgWrapper = styled.div`
  max-width: 363px;
`;
export const CloudImg = styled.img``;
export const CloudTheme = styled.div`
  padding-left: 34px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 180%;
  color: var(--color-blue-200);

  &::before {
    content: '';
    width: 50px;
    height: 1px;
    background: var(--color-blue-200);
  }
`;

export const CloudTitle = styled.div`
  margin-bottom: 60px;
  font-family: Aire Exterior, sans-serif;
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
