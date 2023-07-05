import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoints';

export const SlidesImg = styled.div<{ imagePath: string }>`
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 777px;
  background: radial-gradient(
      96.01% 49.95% at 50.05% 49.91%,
      rgba(82, 125, 139, 0) 0%,
      rgba(82, 125, 139, 0.5) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    url(${(props) => props.imagePath}) center, no-repeat;
  background-size: cover;
  z-index: 1;
  box-shadow: -33px 17px 29px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: ${getBreakpoint('TABLET_L', 'down')}) {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${(props) => props.imagePath}) center, no-repeat;
  }
`;
