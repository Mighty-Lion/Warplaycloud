import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MenuWrapper = styled(motion.div)<{
  isOpenMenu: boolean | undefined;
}>`
  position: fixed;
  z-index: 999;
  display: block;
  width: 100vw;
  height: 100%;
  background: var(--color-black-700);
  overflow: hidden;
`;

export const MenuContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr auto auto;
  padding: 30px 30px 35px 30px;
`;

export const DismissBtn = styled.button`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  padding: 22px 0 0 0;
  border: 0;
  width: 100%;
  background: transparent;
  border-top: 1px solid var(--color-white-0);
`;
