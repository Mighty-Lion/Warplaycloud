import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const SliderLogoContainer = styled.div`
  display: none;

  position: absolute;
  top: 40px;
  left: 50%;
	transform: translateX(-50%);
  z-index: 20;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: block;
  }
`;
