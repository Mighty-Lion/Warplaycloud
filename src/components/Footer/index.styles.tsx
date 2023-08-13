import styled from '@emotion/styled';
import exp from 'constants';
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  width: 100vw;
  background: var(--color-black-800);
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 56px 66px 56px 150px;
  width: 100%;
  max-width: 1440px;
  background: var(--color-black-800);
`;

export const FooterLogos = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLogo = styled.img``;

export const FooterAuthorImg = styled.img`
  margin-left: 29px;
`;
export const FooterDesignImg = styled.img`
  margin-left: 20px;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterContacts = styled(Link)`
  color: #838383;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;

export const FooterPolitics = styled.a`
  color: #838383;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;

export const FooterCookie = styled.a`
  margin-left: 51px;
  color: #838383;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`;

export const FooterSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-left: 51px;
`;

export const FooterSocialLink = styled.a ` 
  display: flex;
`

export const FooterSocialImg = styled.img ` 
  
`