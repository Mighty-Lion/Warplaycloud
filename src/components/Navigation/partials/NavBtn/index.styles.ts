import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const NavbarButton = styled.button`
  position: relative;
  padding: 0;
  border: none;
  background: inherit;
  font-family: Roboto, serif;
  font-size: 16px;
  font-weight: 300;
  white-space: nowrap;
  color: var(--color-white-0);
  &:hover {
    color: gray;
  }

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    padding-bottom: 10px;
  }
`;
