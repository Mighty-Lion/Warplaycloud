import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getBreakpoint } from "@/Breakpoints";

export const FooterWrapper = styled.footer`
  width: 100vw;
  background: var(--color-black-800);
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 0 auto;
  padding: 56px 87px 56px 150px;
  width: 100%;
  max-width: 1440px;
  background: var(--color-black-800);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 10px;
  }
`;

export const FooterLogos = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  max-width: 480px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    order: 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    margin: 0 auto;
  }
`;

export const FooterLogo = styled.img``;

export const FooterAuthorImg = styled.img`
  margin-left: 29px;
  
  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto;
  }
  
`;
export const FooterDesignImg = styled.img`
  margin-left: 20px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    order: 1;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

export const FooterContacts = styled(Link)`
  white-space: nowrap;
  color: #838383;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;

export const FooterPolitics = styled.a`
  white-space: nowrap;
  color: #838383;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto;
  }
`;

export const FooterCookie = styled.a`
  white-space: nowrap;
  margin-left: 51px;
  color: #838383;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto;
  }
`;

export const FooterSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-left: 51px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 0 auto;
    max-width: 80px;
  }
`;

export const FooterSocialLink = styled.a`
  display: flex;
`;
