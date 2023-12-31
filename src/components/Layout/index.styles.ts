import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const Wrapper = styled.div`
  width: 100vw;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: ${getBreakpoint('TABLET_M', 'down')}) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const ContentWrapper = styled(Container)`
  padding-top: 26px;
  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    padding-top: 0px;
  }
`;
