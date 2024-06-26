import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const HeaderWrapper = styled.header<{ atop: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background: ${(props) =>
    props.atop ? `var(--color-black-700)` : `transparent`};
  transition: 0.5s all;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  padding: 47px 115px 48px 57px;

  @media (max-width: ${getBreakpoint('DESKTOP_S', 'down')}) {
    padding: 47px 115px 48px 57px;
  }

  @media (max-width: ${getBreakpoint('TABLET_L', 'down')}) {
    padding: 47px 0 40px 0;
  }
`;
