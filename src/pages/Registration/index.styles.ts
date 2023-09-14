import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RegistrationWrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const RegistrationContainer = styled.div`
  width: 100%;
`;

export const RegistrationHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const RegistrationTitle = styled.h3`
  font-family: Aire Exterior, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);
`;

export const AuthorizationLink = styled(Link)`
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
  margin-bottom: 30px;
  padding: 25px 24px;
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
  padding: 0 5px;
  border: none;
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
