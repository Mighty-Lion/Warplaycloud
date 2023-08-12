import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getBreakpoint } from '@/Breakpoints';

export const BeginContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 154px;
  max-width: 850px;
  padding-top: 35px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto 113px;
  }
`;
export const BeginGuide = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 92px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 48px;
    margin-bottom: 56px;
    padding: 0 30px;
  }
`;

export const BeginElement = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    justify-content: center;
  }
`;

export const BeginIconWrapper = styled.div<{
  mobileWidth: string;
  mobileHeight: string;
}>`
  width: 64px;
  height: 64px;
  margin: 0 0 10px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    width: ${(props) =>
      props.mobileWidth &&
      `
       ${props.mobileWidth}
  `};
    height: ${(props) =>
      props.mobileHeight &&
      `
       ${props.mobileHeight}
  `};
  }
`;

export const BeginIcon = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const BeginText = styled.div`
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  color: var(--color-gray-300);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    white-space: initial;
    text-align: center;
  }
`;

export const BeginLine = styled(motion.div)<{ desktop?: boolean }>`
  margin-top: 32px;
  height: 1px;
  width: 100%;
  background: var(--color-blue-300);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 28px auto 0;
    width: 58px;
    ${(props) =>
      props.desktop &&
      `
      display: none;
  `};
  }
`;

export const BGLineWrapper = styled(motion.div)`
  display: none;
  position: absolute;
  background: transparent;
  transform: translateX(-50%);

  top: 15%;
  left: 48%;
  width: 35%;
  height: 40%;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: block;
    top: 23%;
  }
  @media (max-width: ${getBreakpoint('TABLET_M', 'down')}) {
    top: 15%;
  }
`;
export const BGLine = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top left,
    rgba(80, 175, 205, 0) 0%,
    rgba(80, 175, 205, 0) calc(50% - 0.8px),
    rgba(80, 175, 205, 1) 50%,
    rgba(80, 175, 205, 0) calc(50% + 0.8px),
    rgba(80, 175, 205, 0) 100%
  );
`;

export const BeginLink = styled(motion(Link))`
  position: relative;
  display: block;
  width: 70px;
  padding: 0 8px 3px;
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
`;

export const BeginThemeWrapper = styled.div`
  margin-left: 50px;
  margin-bottom: 15px;
`;
