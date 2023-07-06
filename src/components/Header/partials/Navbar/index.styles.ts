import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const NavbarList = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavbarLogo = styled.img`
  margin-right: 10px;
`;
export const NavbarRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 861px;
  margin-left: 10px;
`;

export const NavbarTab = styled(motion.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  height: 1px;
  width: 100%;
  background: #00c5ff;
`;
