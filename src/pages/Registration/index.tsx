import { useIdentityContext } from 'react-netlify-identity';
import { useRef, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import { useNavigate } from 'react-router-dom';
import {
  AgreementContainer,
  AgreementLink,
  AuthorizationLink,
  HomePageButtonWrapper,
  RegistrationButton,
  RegistrationButtonWrapper,
  RegistrationContainer,
  RegistrationForm,
  RegistrationHeader,
  RegistrationLogin,
  RegistrationPassword,
  RegistrationTitle,
  RegistrationWrapper,
} from '@/pages/Registration/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import WindowsImage from '@/assets/images/png/Windows.png';
import { AuthSocials } from '@/components/AuthSocials';

export function Registration() {
  const { loginUser, signupUser } = useIdentityContext();
  const formRef = useRef(null);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const signup = () => {
    console.log('signup');
    if (formRef.current !== null) {
      const { email, password } = formRef.current;
      const emailValue = email['value'];
      const passwordValue = password['value'];
      const data = { emailValue, passwordValue };
      signupUser(emailValue, passwordValue, data)
        .then((user) => {
          console.log('Success! Signed up', user);
          navigate('/dashboard');
        })
        .catch((err) => setMsg(`Error: ${err.message}`));
    }
  };

  return (
    <RegistrationWrapper>
      <RegistrationContainer>
        <HomePageButtonWrapper>
          <HomepageButton />
        </HomePageButtonWrapper>
        <RegistrationForm
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <RegistrationHeader>
            <RegistrationTitle>Регистрация</RegistrationTitle>
            <AuthorizationLink to="/">Вход</AuthorizationLink>
          </RegistrationHeader>

          <RegistrationLogin
            id="email"
            type="email"
            name="email"
            placeholder="Почта / Телефон"
          />
          <label htmlFor="email" />
          <RegistrationPassword
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <label htmlFor="password" />
          <RegistrationButtonWrapper>
            <RegistrationButton onClick={signup} type="submit">
              Зарегестрироваться
            </RegistrationButton>
          </RegistrationButtonWrapper>
          <AgreementContainer>
            <Checkbox id="registration_checkbox" key="registration_checkbox" />
            <AgreementLink href={WindowsImage} download>
              Я соглашаюсь со следующими установленными правилами: Политика
              использования файлов cookie WARPLAY.CLOUD, Пользовательское
              соглашение WARPLAY.CLOUD, Лицензионное соглашение MY.GAMES с
              конечным пользователем в отношении Игр, Лицензионное соглашение с
              конечным Пользователем для WARPLAY.CLOUD Игрового центра, Политика
              конфиденциальности портала WARPLAY.CLOUD, Политика
              конфиденциальности WARPLAY.CLOUD для детей
            </AgreementLink>
          </AgreementContainer>
          <AuthSocials />
        </RegistrationForm>
      </RegistrationContainer>
    </RegistrationWrapper>
  );
}
