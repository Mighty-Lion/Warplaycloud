import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {getBreakpoint} from "@/Breakpoints";

export const NavbarList = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavbarRight = styled.div`
	display: flex;
	justify-content: space-between;
  width: 100%;
  max-width: 861px;
	margin-left: 10px;
	// @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
  //   padding: 47px 115px 48px 57px;
  // }
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
