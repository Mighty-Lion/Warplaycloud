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
  display: flex;
  margin-bottom: 92px;
`;

export const BeginElement = styled.div``;

export const BeginIconsWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 10px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    width: 51px;
    height: 50px;
  }
`;

export const BeginText = styled.div`
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  color: var(--color-gray-300);
`;

export const BeginLine = styled.div`
  margin-top: 32px;
  height: 1px;
  width: 100%;
  background: var(--color-blue-300);
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
