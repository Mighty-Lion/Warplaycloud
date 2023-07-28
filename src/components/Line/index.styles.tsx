import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const Line = styled.div<{
  top?: string;
  mobileTop?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
  BGC: string;
  translateX?: string;
  translateY?: string;
  desktop?: boolean;
  mobile?: boolean;
}>`
  position: absolute;
  ${(props) =>
    props.top &&
    `
      top: ${props.top}
  `};
  ${(props) =>
    props.left &&
    `
      left: ${props.left}
  `};
  ${(props) =>
    props.right &&
    `
      right: ${props.right}
  `};
  ${(props) =>
    props.bottom &&
    `
      bottom: ${props.bottom}
  `};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: ${(props) =>
      props.translateX &&
      `
      translateX( ${props.translateX} )
  `}
    ${(props) =>
      props.translateY &&
      `
      translateY( ${props.translateY} )
  `};
  background-color: ${(props) => props.BGC};
  z-index: 23;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    ${(props) =>
      props.desktop &&
      `
      display: none;
  `};
    ${(props) =>
      props.mobileTop &&
      `
      top: ${props.mobileTop}
  `};
  }
`;
