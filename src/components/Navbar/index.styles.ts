import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const NavbarList = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavbarRight = styled.div`
  display: grid;
  grid-template-columns:
    minmax(61px, 97px) minmax(61px, 100px) minmax(61px, 98px)
    minmax(150px, 200px) minmax(50px, 76px) minmax(120px, 158px) auto;
  grid-gap: 10px;
	padding-left: 10px;
  width: 100%;
  max-width: 861px;
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
