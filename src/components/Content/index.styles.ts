import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const ContentContainer = styled.div`
  border-left: 1px solid var(--color-gray-500);
	padding-bottom: 215px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    border-left: none;
  }
`;
