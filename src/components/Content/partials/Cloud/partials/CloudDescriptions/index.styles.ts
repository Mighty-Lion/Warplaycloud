import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const DescriotionText = styled.h5`
  position: relative;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
  color: var(--color-gray-500);

  &:not(:last-of-type) {
    padding-bottom: 27px;
    margin-bottom: 22px;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 271px;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
  &:not(:first-of-type) {
    margin-bottom: 73px;
  }

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    &:not(:last-of-type) {
      padding-bottom: 0px;
      margin-bottom: 53px;
      &:after {
        display: none;
      }
    }
    &:not(:first-of-type) {
      margin-bottom: 83px;
    }
  }
`;
