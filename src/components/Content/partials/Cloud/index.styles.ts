import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CloudContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 30px;
  padding: 42px 80px 0 5px;
`;
export const CloudImgWrapper = styled.div`
	display: flex;
	align-items: center;
  margin-top: 1px;
  width: 100%;
  max-width: 678px;
`;
export const CloudImg = styled.img`
  width: 100%;
  object-fit: contain;
	transform: translateY(-73px)
`;

export const CloudTextWrapper = styled.div`
  display: block;
  max-width: 480px;
`;
export const CloudTheme = styled.div`
  position: relative;
  display: flex;
  margin-left: 50px;
  margin-bottom: 13px;
  padding-left: 34px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 180%;
  color: var(--color-blue-200);

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: -50px;
    width: 50px;
    height: 1px;
    background: var(--color-blue-200);
  }
`;

export const CloudTitle = styled.div`
  margin-bottom: 56px;
  font-family: Aire Exterior, sans-serif;
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);
`;

export const CloudLink = styled(Link)`
  position: relative;
	padding-bottom: 5px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--color-blue-100);

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--color-blue-100);
  }
`;
