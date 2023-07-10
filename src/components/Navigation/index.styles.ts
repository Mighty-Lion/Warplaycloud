import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getBreakpoint } from '@/Breakpoints';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 861px;
  margin-left: 10px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 100px 0 100px 0;
    flex-direction: column;
  }
`;

export const NavTab = styled(motion.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  height: 1px;
  width: 100%;
  background: var(--color-blue-100);
`;
