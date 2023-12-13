import { useEffect, useRef, useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  AuthorizationButton,
  AuthorizationCheckboxWrapper,
  AuthorizationContainer,
  AuthorizationFooter,
  AuthorizationForm,
  AuthorizationHeader,
  AuthorizationLabel,
  AuthorizationErrMessage,
  AuthorizationOpenButton,
  AuthorizationField,
  AuthorizationPasswordImg,
  AuthorizationPasswordWrapper,
  AuthorizationTitle,
  AuthorizationWrapper,
  RegistrationLink,
  AuthorizationLoginWrapper,
} from '@/pages/Authorization/index.styles';
import { HomePageButtonWrapper } from '@/pages/Registration/index.styles';
import { setTabTitle } from '@/functions/setTabTitle';
import { useValidation } from '@/hooks/useValidation';
import { usePassInput } from '@/hooks/usePassInput';
import ScrollToTop from '@/components/ScrollToTop';
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import { AuthSocials } from '@/components/AuthSocials';

export function Authorization() {
  setTabTitle('Авторизация - Warplaycloud');
  const authFormRef = useRef(null);
  const { user, loginUser, logoutUser } = useIdentityContext();
  const [remembered, setRemembered] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const { formik } = useValidation();

  useEffect(() => {
    if (formik.isValid) {
      setDisabled(false);
    } else setDisabled(true);
  }, [formik.isValid]);

  console.log('formik.isValid', formik.isValid)
  const login = () => {
    if (authFormRef.current !== null) {
      const { email, password } = authFormRef.current;
      /* eslint-disable */
      const emailValue = email['value'];
      const passwordValue = password['value'];
      /* eslint-enable */
      loginUser(emailValue, passwordValue, remembered)
        .then(() => {
          navigate('/subscriptions');
        })
        .catch((err) => {
          toast.warn(`Error: ${err.message}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        });
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
            <AuthorizationForm ref={authFormRef} onSubmit={formik.handleSubmit}>
              <AuthorizationLoginWrapper>
                <AuthorizationField
                  id="email"
                  type="text"
                  name="emailorphone"
                  placeholder="Почта / Телефон"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  valid={
                    !(formik.errors.emailorphone && formik.touched.emailorphone)
                  }
                />
                <AuthorizationErrMessage htmlFor="emailAuth">
                  {formik.errors.emailorphone}
                </AuthorizationErrMessage>
              </AuthorizationLoginWrapper>
              <AuthorizationPasswordWrapper>
                <AuthorizationField
                  id="password"
                  type={typeInput}
                  name="password"
                  placeholder="Пароль"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  valid={!(formik.errors.password && formik.touched.password)}
                />
                <AuthorizationErrMessage htmlFor="password">
                  {formik.errors.password}
                </AuthorizationErrMessage>
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
                <AuthorizationButton
                  onClick={login}
                  disabled={isDisabled}
                  isDisabled={isDisabled}
                  type="submit"
                >
                  Войти
                </AuthorizationButton>
              </AuthorizationFooter>
            </AuthorizationForm>
            <AuthSocials />
          </>
        )}
        {user && (
          <AuthorizationButton isDisabled={false} onClick={() => logoutUser()}>
            Выйти
          </AuthorizationButton>
        )}
      </AuthorizationContainer>
    </AuthorizationWrapper>
  );
}
