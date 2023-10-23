import styled from '@emotion/styled';
import { getBreakpoint } from "@/Breakpoints";

export const AuthSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
`;
export const AuthSocialsTitle = styled.h3`
  position: relative;
  margin-bottom: 20px;
  padding: 0 12px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  color: rgba(255, 255, 255, 0.5);

  &::after {
    position: absolute;
    right: -91px;
    top: 49%;
    content: '';
    height: 1px;
    width: 91px;
    background: rgba(255, 255, 255, 0.5);
  }

  &::before {
    position: absolute;
    left: -91px;
    top: 49%;
    content: '';
    height: 1px;
    width: 91px;
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${getBreakpoint('MOBILE_L', 'down')}) {
    &::after, &::before {
      display: none;
    }
  }
`;

export const AuthSocialsMain = styled.div`
  display: grid;
  grid-template-areas:
    'mail vk ok fb google '
    '. twitch twitter apple .';
  grid-row-gap: 13px;
  grid-column-gap: 20px;
`;

export const AuthLink = styled.a<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea && `${props.gridArea}`};
`;

export const AuthSocialsImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
