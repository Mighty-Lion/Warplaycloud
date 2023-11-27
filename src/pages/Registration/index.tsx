import { useIdentityContext } from 'react-netlify-identity';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormikProvider } from 'formik';
import { toast } from 'react-toastify';
import {
  AgreementContainer,
  AgreementLink,
  AuthorizationLink,
  ErrMessage,
  HomePageButtonWrapper,
  PasswordImg,
  PasswordOpenButton,
  RegistrationButton,
  RegistrationButtonWrapper,
  RegistrationContainer,
  RegistrationField,
  RegistrationForm,
  RegistrationHeader,
  RegistrationLoginWrapper,
  RegistrationPasswordWrapper,
  RegistrationTitle,
  RegistrationWrapper,
} from '@/pages/Registration/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import WindowsImage from '@/assets/images/png/Windows.png';
import { AuthSocials } from '@/components/AuthSocials';
import { useValidation } from '@/hooks/useValidation';
import { usePassInput } from '@/hooks/usePassInput';

export function Registration() {
  const [checked, setChecked] = useState(false);
  const { signupUser } = useIdentityContext();
  const formRef = useRef(null);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { formik } = useValidation();
  const signup = () => {
    console.log('signup');
    if (formRef.current !== null) {
      const { email, password } = formRef.current;
      /* eslint-disable */
      const emailValue = email['value'];
      const passwordValue = password['value'];
      /* eslint-enable */
      const data = { emailValue, passwordValue };

      signupUser(emailValue, passwordValue, data)
        .then((user) => {
          console.log('Success! Signed up', user);
          navigate('/');
        })
        .catch((err) => {
          setMsg(`Error: ${err.message}`);
          toast.warn(
            `${msg}. Номер телефона пройдет валидацию, но на Identity не настроена работа с номерами телефонов. `,
            {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            }
          );
        });
    }
  };

  const { typeInput, passImg, handlePassInput } = usePassInput();

  return (
    <RegistrationWrapper>
      <RegistrationContainer>
        <HomePageButtonWrapper>
          <HomepageButton />
        </HomePageButtonWrapper>
        <FormikProvider value={formik}>
          <RegistrationForm
            onSubmit={formik.handleSubmit}
            ref={formRef}
            // onSubmit={(e) => {
            //   e.preventDefault();
            // }}
          >
            <RegistrationHeader>
              <RegistrationTitle>Регистрация</RegistrationTitle>
              <AuthorizationLink to="/Authorization">Вход</AuthorizationLink>
            </RegistrationHeader>

            <RegistrationLoginWrapper>
              <RegistrationField
                id="email"
                name="emailorphone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Почта / Телефон"
                invalid={
                  !(formik.errors.emailorphone && formik.touched.emailorphone)
                }
              />
              <ErrMessage htmlFor="email">
                {formik.errors.emailorphone}
              </ErrMessage>
            </RegistrationLoginWrapper>

            <RegistrationPasswordWrapper>
              <RegistrationField
                id="password"
                name="password"
                type={typeInput}
                placeholder="Пароль"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                invalid={!(formik.errors.password && formik.touched.password)}
              />
              <PasswordOpenButton
                onClick={() => {
                  handlePassInput();
                }}
              >
                <PasswordImg src={passImg} alt="passImg" />
              </PasswordOpenButton>
              <ErrMessage htmlFor="password">
                {formik.errors.password}
              </ErrMessage>
            </RegistrationPasswordWrapper>

            <RegistrationButtonWrapper>
              <RegistrationButton
                onClick={signup}
                disabled={!checked && !formik.isValid}
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
                конечным пользователем в отношении Игр, Лицензионное соглашение
                с конечным Пользователем для WARPLAY.CLOUD Игрового центра,
                Политика конфиденциальности портала WARPLAY.CLOUD, Политика
                конфиденциальности WARPLAY.CLOUD для детей
              </AgreementLink>
            </AgreementContainer>
            <AuthSocials />
          </RegistrationForm>
        </FormikProvider>
      </RegistrationContainer>
    </RegistrationWrapper>
  );
}
