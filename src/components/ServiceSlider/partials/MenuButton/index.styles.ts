import styled from '@emotion/styled';

export const MenuButton = styled.div`
  position: absolute;
  bottom: 18px;
  right: 19px;
  padding: 0;
  border: none;
  width: 52px;
  height: 30px;
  background: transparent;
  z-index: 22;
`;

export const ButtonLine = styled.div<{ isOpenMenu: boolean }>`
  position: relative;

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
