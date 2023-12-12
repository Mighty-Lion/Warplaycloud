import {
  ContactsContainer,
  ContactsHeader,
  ContactsSocialsWrapper,
  ContactsTitle,
} from '@/pages/Contacts/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { SocialsSmall } from '@/components/SocialsSmall';
import ScrollToTop from "@/components/ScrollToTop";
import {setTabTitle} from "@/functions/setTabTitle";

export function Contacts() {
  setTabTitle('Контакты - Warplaycloud');
  return (
    <>
      <ScrollToTop />
      <ContactsContainer>
        <ContactsHeader>
          <HomepageButton />
          <ContactsTitle>Контакты</ContactsTitle>
        </ContactsHeader>
        <ContactsSocialsWrapper>
          <SocialsSmall />
        </ContactsSocialsWrapper>
      </ContactsContainer>
    </>

  );
}
