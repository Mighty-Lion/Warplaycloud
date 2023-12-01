import {
  MailConfirmationContainer,
  MailConfirmationContent,
  MailConfirmationHeader,
  MailConfirmationTitle,
} from '@/pages/MailConfirmation/index.styles';
import { HomepageButton } from '@/components/HomepageButton';

export function MailConfirmation() {
  return (
    <MailConfirmationContainer>
      <MailConfirmationHeader>
        <HomepageButton />
        <MailConfirmationTitle>
          На вашу почту отправлено подтверждение
        </MailConfirmationTitle>
      </MailConfirmationHeader>
      <MailConfirmationContent>
        На Ваш почтовый ящик отправлено сообщение, содержащее ссылку для
        подтверждения правильности e-mail адреса. Пожалуйста, перейдите по
        ссылке для завершения подписки.
      </MailConfirmationContent>
      <MailConfirmationContent>
        Если письмо не пришло в течение 15 минут, проверьте папку «Спам». Если
        письмо вдруг попало в эту папку, откройте письмо, нажмите кнопку «Не
        спам» и перейдите по ссылке подтверждения. Если же письма нет и в папке
        «Спам», попробуйте подписаться ещё раз. Возможно, вы ошиблись при вводе
        адреса.
      </MailConfirmationContent>
    </MailConfirmationContainer>
  );
}
