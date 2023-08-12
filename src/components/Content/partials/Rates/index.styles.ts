import styled from '@emotion/styled';
import { getBreakpoint } from "@/Breakpoints";
import { motion } from "framer-motion";

export const RatesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	padding: 0 48px;
`;
export const RatesThemeWrapper = styled.div`
  margin-left: 50px;
  margin-bottom: 13px;
`;

export const SubscriptionsWrapper = styled(motion.div)`
  margin-bottom: 90px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    margin-bottom: 0;
  }
`;

export const RatesLine = styled(motion.div) ` 
  margin: 0 auto;
  width: 47%;
  height: 1px;
  background: var(--color-blue-100);

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    display: none;
  }
`
