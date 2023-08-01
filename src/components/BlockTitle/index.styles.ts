import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getBreakpoint } from '@/Breakpoints';

export const TitleText = styled(motion.h2)<{
  marginBottom: string;
  mobileMarginBottom: string;
}>`
  margin-bottom: ${(props) =>
    props.marginBottom &&
    `
      ${props.marginBottom}
  `};
  font-family: Aire Exterior, sans-serif;
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin-bottom: ${(props) =>
      props.mobileMarginBottom &&
      `
      ${props.mobileMarginBottom}
  `};
  }
`;
