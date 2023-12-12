import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getBreakpoint } from '@/Breakpoints';

export const AuthorizationWrapper = styled.div`
  display: flex;
  margin: 8em auto 125px;
  width: 100%;
  max-width: 434px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin: 60px auto 125px;
    padding: 0 8px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    flex-direction: column;
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

export const LabelNone = styled.label`
  display: none;
`;

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
  cursor: pointer;

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

export const AuthorizationLoginWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const AuthorizationPasswordWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const AuthorizationErrMessage = styled.label`
  position: absolute;
  bottom: -12px;
  left: 5px;
  margin: 0 10px;
  font-size: 10px;
  color: red;
`;
export const AuthorizationField = styled.input<{ invalid: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  max-width: 390px;
  height: 75px;
  border-radius: 5px;
  background: var(--color-white-0);
  border: 1px solid ${(props) => (props.invalid ? 'green' : 'red')};

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

export const AuthorizationOpenButton = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  z-index: 999;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const AuthorizationPasswordImg = styled.img`
  display: flex;
  width: 100%;
  object-fit: contain;
`;

export const AuthorizationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
  width: 100%;
  max-width: 390px;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    flex-wrap: wrap;
    justify-content: center;
    max-width: 251px;
    margin: 0 auto 56px;
  }
`;

export const AuthorizationCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    order: 2;
  }
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

  cursor: pointer;
  outline: none;

  font-family: Aire Exterior, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-black-900);

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    order: 1;
    margin-bottom: 33px;
  }
`;
