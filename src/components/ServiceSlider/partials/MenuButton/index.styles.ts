import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const MenuBtn = styled.div`
  position: fixed;
  top: 18px;
  right: 15px;
  display: none;
  padding: 0;
  border: none;
  width: 52px;
  height: 30px;
  background: transparent;
  z-index: 22;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: block;
  }
`;

export const ButtonLine = styled.div<{ isOpenMenu: boolean | undefined }>`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 5px;
    background: var(--color-gray-100);
    transition: all 0.5s;
  }

  &::before {
    top: -9px;
  }
  &::after {
    top: 6px;
  }

  ${(props) =>
    props.isOpenMenu &&
    `
	    &::before {
            transform: translateY(5px)  rotate(45deg); 
         }
        &::after {
            transform: translateY(-10px)  rotate(-45deg); 
         }
	`}
`;
