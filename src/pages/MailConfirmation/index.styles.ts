import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const MailConfirmationContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-content: center;
  margin: 115px auto 100px auto;
	max-width: 836px;;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    margin: 30px 0 50px;
  }
`;

export const MailConfirmationHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  align-items: center;
  margin: 0 auto 65px auto;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 40px;
    margin: 0 0 70px 0;
  }
`;

export const MailConfirmationTitle = styled.h3`
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

export const MailConfirmationContent = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 180%;
	color: var(--color-gray-500);
`;

export const MailConfirmationStatus = styled.h3`
  white-space: nowrap;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    white-space: initial;
  }
`;
