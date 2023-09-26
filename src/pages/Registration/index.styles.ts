import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getBreakpoint } from '@/Breakpoints';

export const RegistrationWrapper = styled.div`
  display: flex;
  margin: 200px auto 125px;
  width: 100%;
  max-width: 500px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 60px auto 125px;
    padding: 0 8px;
  }
`;

export const RegistrationContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    flex-wrap: wrap;
  }
`;

export const RegistrationForm = styled.form`
  display: block;
  
  label {
    display: none;
  }
`;
export const RegistrationHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const RegistrationTitle = styled.h3`
  margin-left: 30px;
  font-family: Aire Exterior, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    margin: 0 0 0 40px;
  }
`;

export const AuthorizationLink = styled(Link)`
  margin: 0 30px 0 30px;
  font-family: Aire Exterior, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    margin: 0 0 0 40px;
  }
`;

export const RegistrationLogin = styled.input`
  display: flex;
  margin-bottom: 15px;
  padding: 25px 24px;
  border: none;
  width: 100%;
  max-width: 390px;
  height: 75px;
  border-radius: 5px;
  background: var(--color-white-0);

  font-family: Aire Exterior, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(0, 0, 0, 0.5);

  &::placeholder {
    font-family: Aire Exterior, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    max-width: 500px;
  }
`;

export const RegistrationPassword = styled.input`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  border: none;
  padding: 0 24px;
  width: 100%;
  max-width: 390px;
  height: 75px;
  border-radius: 5px;
  background: var(--color-white-0);

  font-family: Aire Exterior, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(0, 0, 0, 0.5);

  &::placeholder {
    font-family: Aire Exterior, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    max-width: 500px;
  }
`;

export const RegistrationButtonWrapper = styled.div`
  width: 100%;
  max-width: 390px;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    max-width: 500px;
  }
`;
export const RegistrationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 51px;
  padding: 0 5px;
  border: none;
  height: 61px;
  width: 100%;
  max-width: 251px;
  background: var(--color-white-0);
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

  font-family: Aire Exterior, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-black-900);
`;

export const HomePageButtonWrapper = styled.div`
  margin-top: 14px;
  margin-right: 30px;
  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    margin: 0 0 40px 20px;
  }
`;

export const AgreementContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  margin: 0 20px 51px 0;
`;

export const AgreementLink = styled.a`
  max-width: 382px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  color: rgba(255, 255, 255, 0.5);
`;
