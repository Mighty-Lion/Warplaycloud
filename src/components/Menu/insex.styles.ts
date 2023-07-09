import styled from '@emotion/styled';

export const MenuWrapper = styled.div<{ isOpenMenu: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: block;
  width: 100vw;
  height: 100vh;
  //background: var(--color-black-700);
  transform: translateX(-100vw);
  transition: 0.5s all;

  //background: ${(props) => (props.isOpenMenu ? `blue` : `red`)};
`;

export const MenuContainer = styled.div`
  padding: 30px 41px 30px 30px;
`;
