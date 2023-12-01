import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MailConfirmationContainer,
  MailConfirmationContent,
  MailConfirmationHeader, MailConfirmationStatus,
  MailConfirmationTitle,
} from '@/pages/MailConfirmation/index.styles';
import { HomepageButton } from '@/components/HomepageButton';

export function MailConfirmation() {
  const [secondsState, setSeconds] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevCount) => prevCount - 1);
    }, 1000);

    if (secondsState <= 0) {
      navigate('/');
    }

    return () => clearInterval(intervalId);
  }, [secondsState]);

  console.log(secondsState);
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
      <MailConfirmationStatus>
        Вы будете переведены на главную страницу через {secondsState} секунд.
      </MailConfirmationStatus>
    </MailConfirmationContainer>
  );
}
