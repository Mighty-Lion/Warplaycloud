import { useRef, useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { useNavigate } from 'react-router-dom';
import {
  AuthorizationButton,
  AuthorizationCheckboxWrapper,
  AuthorizationContainer,
  AuthorizationFooter,
  AuthorizationForm,
  AuthorizationHeader,
  AuthorizationLabel,
  AuthorizationLogin,
  AuthorizationPassword,
  AuthorizationTitle,
  AuthorizationWrapper,
  LabelNone,
  RegistrationLink,
} from '@/pages/Authorization/index.styles';
import { HomePageButtonWrapper } from '@/pages/Registration/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import { AuthSocials } from '@/components/AuthSocials';

export function Authorization() {
  const authFormRef = useRef(null);
  const { user, loginUser, logoutUser } = useIdentityContext();
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const login = () => {
    console.log('login');
    if (authFormRef.current !== null) {
      console.log(authFormRef.current);
      const { emailAuth, passwordAuth } = authFormRef.current;
      const emailValue = emailAuth['value'];
      const passwordValue = passwordAuth['value'];
      loginUser(emailValue, passwordValue, true)
        .then((user) => {
          console.log('Success! Logged in', user);
          navigate('/Download');
        })
        .catch((err) => setMsg(`Error: ${err.message}`));
      console.log('msg', msg);
    }
  };

  return (
    <AuthorizationWrapper>
      <HomePageButtonWrapper>
        <HomepageButton />
      </HomePageButtonWrapper>
      <AuthorizationContainer>
        <AuthorizationHeader>
          <AuthorizationTitle>Вход</AuthorizationTitle>
          <RegistrationLink to="/Registr">Регистрация</RegistrationLink>
        </AuthorizationHeader>
        {!user && (
          <>
            <AuthorizationForm
              ref={authFormRef}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <AuthorizationLogin
                id="emailAuth"
                type="emailAuth"
                name="emailAuth"
                placeholder="Почта / Телефон"
              />
              <LabelNone htmlFor="emailAuth" />
              <AuthorizationPassword
                id="passwordAuth"
                type="passwordAuth"
                name="passwordAuth"
                placeholder="Пароль"
              />
              <LabelNone htmlFor="passwordAuth" />
              {msg && <p>{msg}</p>}
              <AuthorizationFooter>
                <AuthorizationCheckboxWrapper>
                  <Checkbox id="authCheckbox" />
                  <AuthorizationLabel htmlFor="authCheckbox">
                    Запомнить
                  </AuthorizationLabel>
                </AuthorizationCheckboxWrapper>
                <AuthorizationButton onClick={login}>Войти</AuthorizationButton>
              </AuthorizationFooter>
            </AuthorizationForm>
            <AuthSocials />
          </>
        )}
        {user && (
          <AuthorizationButton onClick={() => logoutUser()}>
            Выйти
          </AuthorizationButton>
        )}
      </AuthorizationContainer>
    </AuthorizationWrapper>
  );
}
