import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const SliderWrapper = styled.div`
  position: relative;
  margin: 26px 0 97px;
  width: 100%;
  height: 777px;
  border-radius: 15px;
  border: 0.5px solid var(--color-blue-200);
  overflow: hidden;
  background: radial-gradient(
      96.01% 49.95% at 50.05% 49.91%,
      rgba(82, 125, 139, 0) 0%,
      rgba(82, 125, 139, 0.25) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  box-shadow: 0px 0px 29px 17px rgba(87, 214, 255, 0.25);

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    margin: 0 0 80px;
    width: calc(100% + 22px);
    transform: translateX(-11px);
    border-radius: 0px 0px 15px 15px;
    box-shadow: none;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    width: calc(100% + 12px);
    transform: translateX(-6px);
  }
`;
