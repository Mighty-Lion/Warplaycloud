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
  filter: drop-shadow(-17px 30px 22px rgba(16, 16, 16, 0.49))
    drop-shadow(0px 10px 30px rgba(0, 197, 255, 0.3))
    drop-shadow(0px 5px 5px #00c5ff) drop-shadow(0px 4px 0px #1a1a1a);
  transition: 0.5s all;

  &:hover {
    filter: drop-shadow(-17px 30px 22px rgba(16, 16, 16, 0.49))
      drop-shadow(0px 10px 30px rgba(0, 197, 255, 0.3))
      drop-shadow(0px 5px 5px var(--color-white-0))
      drop-shadow(0px 4px 0px #1a1a1a);
  }
`;
