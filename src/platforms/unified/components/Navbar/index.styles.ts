import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavbarList = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  grid-gap: 106px;
`;

export const NavbarLink = styled(Link)`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  color: #ffffff;
`;

export const NavbarRight = styled.div`
  display: grid;
	grid-template-columns: minmax(61px, 97px) minmax(61px, 100px) minmax(61px, 98px) minmax(150px, 200px) minmax(50px, 76px) minmax(120px, 158px) auto;
  grid-gap: 10px;
	width: 100%;
`;
