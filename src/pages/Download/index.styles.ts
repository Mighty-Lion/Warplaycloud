import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getBreakpoint } from '@/Breakpoints';

export const DownloadWrapper = styled.div`
  position: relative;
  height: 73vh;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    height: 120vh;
  }

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    height: 150vh;
  }
`;

export const DownloadContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: grid;
  grid-template-rows: auto auto;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    top: 50%;
  }
`;

export const DownloadHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 60px;
  align-items: center;
  margin-bottom: 125px;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 40px;
    margin-bottom: 70px;
  }
`;

export const DownloadTitle = styled.h3`
  white-space: nowrap;
  font-family: Aire Exterior, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    white-space: initial;
  }
`;

export const DownloadReferences = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 61px;
  margin-left: 71px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    margin-left: 0;
  }
`;

export const DownloadReference = styled.a`
  display: flex;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    width: 80px;
    height: 80px;
  }
`;
export const DownloadImage = styled.img`
  display: flex;
  object-fit: contain;
`;
