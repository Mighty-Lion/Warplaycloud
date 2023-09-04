import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DownloadContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

export const DownloadHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DownloadTitle = styled.h3`
  font-family: Aire Exterior, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);
`;
export const DownloadLink = styled(Link)`
  display: flex;
`;


export const DownloadReferences = styled.div ` 
  display: flex;
  flex-wrap: wrap;
`

export  const  DownloadReference = styled.a ` 
  display: flex;
`
export const DownloadImage = styled.img`
  display: flex;
  object-fit: contain;
`;
