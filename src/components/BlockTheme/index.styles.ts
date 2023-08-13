import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ThemeText = styled(motion.h6)`
  position: relative;
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
`;
