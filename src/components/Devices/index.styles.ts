import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getBreakpoint } from '@/Breakpoints';

export const DevicesContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
  padding: 30px 0 371px 80px;
  overflow: hidden;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin-bottom: 77px;
    padding: 0 0 6px 0;
    overflow: visible;
  }
`;

export const DevicesMain = styled(motion.div)`
  width: 100%;
  max-width: 450px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    max-width: 1440px;
  }
`;

export const DevicesThemeWrapper = styled.div`
  margin-left: 57px;
  margin-bottom: 23px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto 23px;
    padding-left: 60px;
    max-width: 300px;
  }
`;

export const DevicesText = styled(motion.div)`
  margin-bottom: 60px;
  font-family: Roboto, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  color: var(--color-gray-500);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto 73px;
    padding: 0 35px;
  }
`;

export const DevicesTitleWrapper = styled.div`
  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto 23px;
    max-width: 500px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    max-width: 280px;
  }
`;
export const DevicesLink = styled(motion(Link))`
  display: block;
  padding-bottom: 5px;
  margin-bottom: 371px;
  width: 155px;
  border-bottom: 1px solid var(--color-blue-100);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--color-blue-100);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto;
  }
`;

export const DevicesImageWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 85%;
  width: 100%;
  max-width: 1192px;
  transform: translateX(-50%);
  z-index: -2;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: none;
  }
`;

export const DevicesMobileImageWrapper = styled(motion.div)`
  display: none;
  width: calc(100% + 134px);
  margin-bottom: 40px;
  transform: translateX(-16%);
  z-index: 100;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: block;
  }
`;

export const DevicesImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const DevicesBlur = styled.div`
  width: 461px;
  height: 461px;
  border-radius: 461px;
  background: rgba(0, 185, 239, 0.15);
  filter: blur(125px);
`;
