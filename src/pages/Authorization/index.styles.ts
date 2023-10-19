import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getBreakpoint } from '@/Breakpoints';

export const AuthorizationWrapper = styled.div`
  display: flex;
  margin: 200px auto 125px;
  width: 100%;
  max-width: 500px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 60px auto 125px;
    padding: 0 8px;
  }
`;

export const AuthorizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    flex-wrap: wrap;
  }
`;

export const AuthorizationForm = styled.form`
  display: block;
`;

export const LabelNone = styled.label ` 
  display: none;
`

export const AuthorizationHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const AuthorizationTitle = styled.h3`
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

export const RegistrationLink = styled(Link)`
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

export const AuthorizationLogin = styled.input`
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

export const AuthorizationPassword = styled.input`
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

export const AuthorizationFooter = styled.div`
  display:  flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 390px;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    max-width: 500px;
  }
`;

export const AuthorizationCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorizationLabel = styled.label`
  display: block;
  margin-left: 16px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  color: rgba(255, 255, 255, 0.5);
`;
export const AuthorizationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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
