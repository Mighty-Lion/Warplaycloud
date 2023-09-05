import {
  ContactsContainer,
  ContactsHeader, ContactsSocialsWrapper,
  ContactsTitle
} from "@/pages/Contacts/index.styles";
import { HomepageButton } from '@/components/HomepageButton';
import { SocialsSmall } from '@/components/SocialsSmall';

export function Contacts() {
  return (
    <ContactsContainer>
      <ContactsHeader>
        <HomepageButton />
        <ContactsTitle>Контакты</ContactsTitle>
      </ContactsHeader>
      <ContactsSocialsWrapper>
        <SocialsSmall />
      </ContactsSocialsWrapper>
    </ContactsContainer>
  );
}
