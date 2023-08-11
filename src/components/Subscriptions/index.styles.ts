import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const SubscriptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    grid-template-columns: auto;
		grid-template-rows: repeat(3, 1fr);
  }
`;
