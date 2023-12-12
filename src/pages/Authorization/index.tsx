import { useRef, useState } from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormikProvider } from 'formik';
import {
  AuthorizationButton,
  AuthorizationCheckboxWrapper,
  AuthorizationContainer,
  AuthorizationFooter,
  AuthorizationForm,
  AuthorizationHeader,
  AuthorizationLabel,
  AuthorizationLogin,
  AuthorizationErrMessage,
  AuthorizationOpenButton,
  AuthorizationField,
  AuthorizationPasswordImg,
  AuthorizationPasswordWrapper,
  AuthorizationTitle,
  AuthorizationWrapper,
  LabelNone,
  RegistrationLink,
  AuthorizationLoginWrapper,
} from '@/pages/Authorization/index.styles';
import {
  ErrMessage,
  HomePageButtonWrapper,
} from '@/pages/Registration/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import { AuthSocials } from '@/components/AuthSocials';
import { usePassInput } from '@/hooks/usePassInput';
import { setTabTitle } from '@/functions/setTabTitle';
import ScrollToTop from '@/components/ScrollToTop';
import { useValidation } from '@/hooks/useValidation';

export function Authorization() {
  setTabTitle('Авторизация - Warplaycloud');
  const authFormRef = useRef(null);
  const { user, loginUser, logoutUser } = useIdentityContext();
  const [remembered, setRemembered] = useState(false);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { formik } = useValidation();

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
        .catch((err) => {
          toast.warn(`Error: ${err.message}.`, {
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
      console.log('msg', msg);
    }
  };

  const { typeInput, passImg, handlePassInput } = usePassInput();

  console.log(
    'invaid',
    !(formik.errors.emailorphone && formik.touched.emailorphone)
  );
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
                  invalid={
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
                  invalid={!(formik.errors.password && formik.touched.password)}
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
