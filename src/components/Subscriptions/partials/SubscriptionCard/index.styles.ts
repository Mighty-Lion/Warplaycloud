import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const SubscriptionCardWrapper = styled.div`
  position: relative;
  padding: 76px 42px 47px;
  border-radius: 5px;
  background: var(--color-black-400);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    padding: 76px 24px 51px;
  }
`;

export const SubscriptionCardName = styled.pre`
  margin: 0 0 18px 0;
  color: var(--color-white-0);
  font-family: Roboto, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
`;

export const SubscriptionCardRate = styled.div`
  margin-bottom: 27px;
  color: var(--color-white-0);
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubscriptionText = styled.pre`
  margin: 0 0 134px 0;
  color: var(--color-gray-500);
  font-family: Roboto, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

export const SubscriptionButton = styled.button`
  &:nth-of-type(even) {
    color: var(--color-white-100);
  }
  position: absolute;
  bottom: 47px;
  left: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  width: calc(100% - 84px);
  height: 70px;
  border-radius: 5px;
  background: var(--color-blue-100);
  cursor: pointer;

  color: var(--color-black-700);
  font-family: Aire Exterior, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    bottom: 51px;
    left: 24px;
    width: calc(100% - 48px);
  }
`;
