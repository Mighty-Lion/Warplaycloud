import styled from '@emotion/styled';

export const MenuWrapper = styled.div<{ isOpenMenu: boolean | undefined }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: block;
  width: 100vw;
  height: 100vh;
  background: var(--color-black-700);
  transition: 0.5s all;

  transform: ${({ isOpenMenu }) =>
    isOpenMenu ? 'translateX(0)' : 'translateX(-100vw)'};
	
	overflow: hidden;
`;

export const MenuContainer = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 1fr auto;
  padding: 30px 30px 41px 30px;
`;

export const DismissBtn = styled.button`
	position: relative;
	bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  border: 0;
  background: transparent;
  border-top: 1px solid var(--color-white-0);
`;
