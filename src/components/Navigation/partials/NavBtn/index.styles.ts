import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';
import { Link } from "react-router-dom";

export const NavbarButton = styled(Link)`
  position: relative;
  padding: 0 0 5px 0;
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
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
`;
