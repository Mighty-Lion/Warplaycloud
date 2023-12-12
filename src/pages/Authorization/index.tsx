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
  AuthorizationMessage,
  AuthorizationOpenButton,
  AuthorizationPassword,
  AuthorizationPasswordImg,
  AuthorizationPasswordWrapper,
  AuthorizationTitle,
  AuthorizationWrapper,
  LabelNone,
  RegistrationLink,
} from '@/pages/Authorization/index.styles';
import { HomePageButtonWrapper } from '@/pages/Registration/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import { AuthSocials } from '@/components/AuthSocials';
import { usePassInput } from '@/hooks/usePassInput';
import {setTabTitle} from "@/functions/setTabTitle";
import ScrollToTop from "@/components/ScrollToTop";

export function Authorization() {
  setTabTitle('Авторизация - Warplaycloud');
  const authFormRef = useRef(null);
  const { user, loginUser, logoutUser } = useIdentityContext();
  const [remembered, setRemembered] = useState(false);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const login = () => {
    console.log('login');
    if (authFormRef.current !== null) {
      console.log(authFormRef.current);
      const { emailAuth, passwordAuth } = authFormRef.current;
      /* eslint-disable */
      const emailValue = emailAuth['value'];
      const passwordValue = passwordAuth['value'];
      /* eslint-enable */
      loginUser(emailValue, passwordValue, remembered)
        .then(() => {
          navigate('/subscriptions');
        })
        .catch((err) => setMsg(`Error: ${err.message}`));
      console.log('msg', msg);
    }
  };

  const { typeInput, passImg, handlePassInput } = usePassInput();

  return (
    <AuthorizationWrapper>
      <ScrollToTop />
      <HomePageButtonWrapper>
        <HomepageButton />
      </HomePageButtonWrapper>
      <AuthorizationContainer>
        <AuthorizationHeader>
          <AuthorizationTitle>Вход</AuthorizationTitle>
          <RegistrationLink to="/registr">Регистрация</RegistrationLink>
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
              <AuthorizationPasswordWrapper>
                <AuthorizationPassword
                  id="passwordAuth"
                  type={typeInput}
                  name="passwordAuth"
                  placeholder="Пароль"
                />
                <LabelNone htmlFor="passwordAuth" />
                {msg && <AuthorizationMessage>{msg}</AuthorizationMessage>}
                <AuthorizationOpenButton
                  onClick={() => {
                    handlePassInput();
                  }}
                >
                  <AuthorizationPasswordImg src={passImg} alt="passImg" />
                </AuthorizationOpenButton>
              </AuthorizationPasswordWrapper>

              <AuthorizationFooter>
                <AuthorizationCheckboxWrapper>
                  <Checkbox
                    id="authCheckbox"
                    onChange={(event) => setRemembered(event.target.checked)}
                  />
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
