import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getBreakpoint } from '@/Breakpoints';

export const ThemeText = styled(motion.h6)`
  position: relative;
  //margin-left: 50px;
  //margin-bottom: 13px;
  padding-left: 34px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 180%;
	white-space: nowrap;
  color: var(--color-blue-200);

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: -50px;
    width: 50px;
    height: 1px;
    background: var(--color-blue-200);
  }

  // @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
  //   margin-left: 103px;
  //   margin-bottom: 14px;
  // }
`;
