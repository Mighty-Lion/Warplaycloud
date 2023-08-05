import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import exp from 'constants';
import { getBreakpoint } from '@/Breakpoints';

export const BeginContainer = styled.div`
  margin: 0 auto;
  max-width: 850px;
  padding-top: 35px;
  padding-bottom: 157px;
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
    padding: 0 30px;
  }
`;

export const BeginElement = styled.div`
  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    justify-content: center;
  }
`;

export const BeginIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 10px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    width: 51px;
    height: 50px;
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

export const BeginLine = styled.div`
  margin-top: 32px;
  height: 1px;
  width: 100%;
  background: var(--color-blue-300);
`;

export const BeginModifiedLine = styled.div`
  margin-top: 32px;
  height: 1px;
  width: 100%;
  background: var(--color-blue-300);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin-top: 0;
    position: absolute;
    top: 34%;
    left: 50%;
    width: 43%;
    transform: translateX(-50%) rotate(-45deg);
  }
`;

export const BeginLink = styled(Link)`
  position: relative;
  display: block;
  width: 70px;
  margin: 0 auto;
  padding: 0 10px 3px;
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
  margin: 0 auto;
  width: 200px;
`;

export const BeginTitleWrapper = styled.div`
  margin: 0 auto;
  width: 187px;
`;
