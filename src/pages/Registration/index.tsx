import { useIdentityContext } from 'react-netlify-identity';
import { useRef, useState } from 'react';
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
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const { loginUser, signupUser } = useIdentityContext();
  const formRef = useRef<any>(null);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const signup = () => {
    console.log('signup');
    if (formRef.current !== null) {
      const { email, password } = formRef.current;
      console.log(email.value);
      const emailValue = email.value;
      const passwordValue = password.value;
      const data = { emailValue, passwordValue };
      signupUser(emailValue, passwordValue, data)
        .then((user) => {
          console.log('Success! Signed up', user);
          navigate('/');
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
            <AuthorizationLink to="/Authorization">Вход</AuthorizationLink>
          </RegistrationHeader>

          <RegistrationLogin
            id="reg_email"
            type="reg_email"
            name="reg_email"
            placeholder="Почта / Телефон"
          />
          <label htmlFor="reg_email" />
          <RegistrationPassword
            id="reg_password"
            type="reg_password"
            name="reg_password"
            placeholder="Пароль"
          />
          <label htmlFor="reg_password" />
          <RegistrationButtonWrapper>
            <RegistrationButton
              onClick={signup}
              disabled={!checked}
              type="submit"
            >
              Зарегестрироваться
            </RegistrationButton>
          </RegistrationButtonWrapper>
          <AgreementContainer>
            <Checkbox
              id="registration_checkbox"
              key="registration_checkbox"
              onChange={(event) => setChecked(event.target.checked)}
            />
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
