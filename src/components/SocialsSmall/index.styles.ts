import styled from "@emotion/styled";
import { getBreakpoint } from "@/Breakpoints";

export const SocialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: ${getBreakpoint('TABLET_UL', 'down')}) {
    max-width: 80px;
  }
`;