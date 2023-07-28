import styled from '@emotion/styled';

export const CloudContainer = styled.div`
  display: grid;
  
  margin: 0 0 0 30px;
  padding: 0 0 0 5px;
`;
export const CloudImgWrapper = styled.div`
  
  margin-top: 1px;
  width: 100%;
  max-width: 678px;
`;
export const CloudImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const CloudTheme = styled.div`
  
  position: relative;
  display: flex;
  margin: 0 auto;
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
    top: 13px ;
    left: -35px;
    width: 50px;
    height: 1px;
    background: var(--color-blue-200);
  }
`;

export const CloudTitle = styled.div`
  margin-bottom: 60px;
  font-family: Aire Exterior, sans-serif;
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
