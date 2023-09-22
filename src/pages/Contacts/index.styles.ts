import styled from '@emotion/styled';

export const ContactsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 54px;
  margin: 200px auto;
  justify-content: center;
`;

export const ContactsHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const ContactsTitle = styled.h3`
  font-family: Aire Exterior, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--color-white-0);
  white-space: nowrap;
`;

export const ContactsSocialsWrapper = styled.div ` 
  display: flex;
  justify-content: center;
`