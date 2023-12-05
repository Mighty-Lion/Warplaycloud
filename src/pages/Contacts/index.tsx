import {
  ContactsContainer,
  ContactsHeader,
  ContactsSocialsWrapper,
  ContactsTitle,
} from '@/pages/Contacts/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { SocialsSmall } from '@/components/SocialsSmall';
import { useAllRef } from '@/hooks/useAllRef';

export function Contacts() {
  const { refContacts } = useAllRef();

  return (
    <section ref={refContacts}>
      <ContactsContainer>
        <ContactsHeader>
          <HomepageButton />
          <ContactsTitle>Контакты</ContactsTitle>
        </ContactsHeader>
        <ContactsSocialsWrapper>
          <SocialsSmall />
        </ContactsSocialsWrapper>
      </ContactsContainer>
    </section>
  );
}
