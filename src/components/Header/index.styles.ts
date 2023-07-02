import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #141c24;
  z-index: 100;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  display: block;
  align-items: center;
	width: 100%;
  padding: 47px 151px 40px 93px;
	
	@media (max-width: ${getBreakpoint('DESKTOP_S', 'down')}) {
    padding: 47px 121px 40px 73px;
  }
	
	@media (max-width: ${getBreakpoint('TABLET_L', 'down')}) {
    padding: 47px 0 40px 0;
  }
`;
