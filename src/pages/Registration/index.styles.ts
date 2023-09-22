import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RegistrationWrapper = styled.div`
  display: flex;
  margin: 200px auto 125px;
  width: 100%;
  max-width: 500px;
`;

export const RegistrationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const RegistrationForm = styled.form ` 
  display: block;
`
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
`;

export const AuthorizationLink = styled(Link)`
  margin: 0 30px 0 30px;
  font-family: Aire Exterior, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: rgba(255, 255, 255, 0.5);
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

  &::placeholder {
    font-family: Aire Exterior, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(0, 0, 0, 0.5);
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

  &::placeholder {
    font-family: Aire Exterior, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const RegistrationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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

export const HomePageButtonWrapper = styled.div ` 
  margin-top: 14px;
  margin-right: 30px;
`