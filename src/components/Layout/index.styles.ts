import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const Wrapper = styled.div`
  position: relative;
  //display: grid;
  //grid-template-rows: 1fr auto;
  //align-content: space-between;
	display: flex;
	flex-direction: column;
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  padding-left: 56px;
  padding-right: 56px;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;
