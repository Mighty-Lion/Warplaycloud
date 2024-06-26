import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';
import { Link } from "react-router-dom";

export const SliderExplanationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
	margin-right: 10px;

  @media (max-width: ${getBreakpoint('TABLET_S', 'down')}) {
    top: 40%;
    left: 42px;
    transform: translate(0, -24%);
  }
`;

export const SliderText = styled.div`
  margin-bottom: 93px;
  color: var(--color-white-0);
	
	@media (max-width: ${getBreakpoint('TABLET_S', 'down')}) {
    margin-bottom: 50px;
  }
`;
export const SliderTextTitle = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: 500;
	
  @media (max-width: ${getBreakpoint('TABLET_S', 'down')}) {
		margin-bottom: 7px;
    width: 200px;
    text-align: start;
  }
`;

export const SliderTextDescription = styled.div`
  font-size: 48px;
  font-family: Aire Exterior, serif;
  font-style: normal;
  font-weight: 400;
	line-height: 1;
`;
export const SliderButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  max-width: 251px;
  height: 61px;
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 22px,
    100% 100%,
    calc(100% - 20px) 100%,
    0 100%,
    0 calc(100% - 20px),
    0 0
  );
  background: var(--color-white-0);
  color: var( --color-black-900);
  font-size: 24px;
  font-family: Aire Exterior, serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
	
	@media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
		margin:  0 0 0 17px;
  }
`;
