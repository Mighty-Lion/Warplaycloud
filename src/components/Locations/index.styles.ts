import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getBreakpoint } from '@/Breakpoints';

export const LocationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 57px;
`;
export const LocationsThemeWrapper = styled.div`
  margin-left: 50px;
  margin-bottom: 5px;
`;

export const LocationsSvgWrapper = styled.div`
  width: 100%;
  max-width: 731px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    width: calc(100% + 205px);
    transform: translateY(-5px);
  }
`;

export const LocationsImg = styled(motion.img)`
  width: 100%;
  object-fit: cover;
`;
