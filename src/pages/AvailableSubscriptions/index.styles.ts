import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const AvailableSubscriptionsWrapper = styled.section`
  margin: 150px auto 100px auto;
  padding: 0 50px;
  
  
  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 80px auto;
    padding: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 40px;
  margin: 0 auto 80px auto;
  max-width: 367px;
  align-items: center;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    margin: 0 30px 58px 30px;
  }
`;
