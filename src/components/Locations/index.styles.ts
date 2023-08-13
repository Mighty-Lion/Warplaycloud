import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LocationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LocationsThemeWrapper = styled.div`
  margin-right: 50px;
`;

export const LocationsSvgWrapper = styled(motion.div)`
  width: 100%;
  max-width: 500px;
`;

export const LocationsImg = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  fill: radial-gradient(
      311% 92.28% at 6.37% 87.35%,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 100%,
    ),
    #161d25;
  filter: drop-shadow(-17px 30px 22px rgba(16, 16, 16, 0.49))
    drop-shadow(0px 10px 30px rgba(0, 197, 255, 0.3))
    drop-shadow(0px 5px 5px #00c5ff) drop-shadow(0px 4px 0px #1a1a1a);
`;
