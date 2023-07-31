import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBreakpoint } from '@/Breakpoints';

export const CloudContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 30px;
  padding: 42px 80px 0 0;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0px;
    padding: 0 34px 0 10px;
  }
`;
export const CloudImgWrapper = styled(motion.div)<{
  mobile?: boolean;
  desktop?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 678px;
  z-index: 10;

  ${(props) =>
    props.mobile &&
    `
      display: none;
      margin-bottom: 20px;
  `};

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    ${(props) =>
      props.mobile &&
      `
      display: flex;
      
  `};

    ${(props) =>
      props.desktop &&
      `
      display: none;
  `};

    width: calc(100% + 20px);
    transform: translateX(-10px);
  }
`;
export const CloudImg = styled.img`
  width: 100%;
  object-fit: contain;
  transform: translateY(-73px);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    transform: translateY(0);
  }
`;

export const CloudRightWrapper = styled(motion.div)`
  display: block;
  max-width: 480px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    max-width: 1440px;
  }
`;
export const CloudTheme = styled(motion.div)`
  position: relative;
  margin-left: 50px;
  margin-bottom: 13px;
  padding-left: 34px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 180%;
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

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin-left: 103px;
  }
`;

export const CloudTitle = styled(motion.div)`
  margin-bottom: 56px;
  font-family: Aire Exterior, sans-serif;
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);
`;

export const CloudLink = styled(motion(Link))`
  position: relative;
  padding-bottom: 5px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--color-blue-100);

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--color-blue-100);
  }

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: inline-block;
    left: 50%;
    transform: translateX(-35%);
  }
`;
