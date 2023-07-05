import styled from '@emotion/styled';

export const SliderContentContainer = styled.div`
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`;

export const SliderText = styled.div`
  margin-bottom: 93px;
	color: #fff;
`;
export const SliderTextTitle = styled.div`
  transform: translateY(6px);
  text-align: center;
  font-size: 16px;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: 500;
`;

export const SliderTextDescription = styled.div`
  font-size: 48px;
  font-family: Aire Exterior, serif;
  font-style: normal;
  font-weight: 400;
  //white-space: nowrap;
  overflow: hidden;
  //text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  //-webkit-line-clamp: 3;
  //-webkit-box-orient: vertical;
  //line-clamp: 3;
`;
export const SliderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  max-width: 251px;
  height: 61px;
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 22px,
    100% 100%,
    calc(100% - 20px) 100%,
    0 100%,
    0 calc(100% - 20px),
    0 0
  );
  background: #ffffff;
  color: #000;
  font-size: 24px;
  font-family: Aire Exterior, serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
