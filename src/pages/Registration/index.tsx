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
    console.log(signup);
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    const data = '';
    signupUser(email, password, data)
      .then((user) => {
        console.log('Success! Signed up', user);
        navigate('/dashboard');
      })
      .catch((err) => console.error(err) || setMsg(`Error: ${err.message}`));
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
            type="email"
            name="email"
            placeholder="Почта / Телефон"
          />
          <RegistrationPassword
            type="password"
            name="password"
            placeholder="Пароль"
          />
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
