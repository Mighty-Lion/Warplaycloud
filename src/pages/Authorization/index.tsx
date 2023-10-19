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
  AuthorizationWrapper, LabelNone,
  RegistrationLink
} from "@/pages/Authorization/index.styles";
import { HomePageButtonWrapper } from '@/pages/Registration/index.styles';
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import { AuthSocials } from '@/components/AuthSocials';

export function Authorization() {
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
        <AuthorizationForm>
          <AuthorizationLogin
            id="auth_email"
            type="auth_email"
            name="auth_email"
            placeholder="Почта / Телефон"
          />
          <LabelNone htmlFor="auth_email" />
          <AuthorizationPassword
            id="auth_password"
            type="auth_password"
            name="auth_password"
            placeholder="Пароль"
          />
          <LabelNone htmlFor="auth_password" />
          <AuthorizationFooter>
            <AuthorizationCheckboxWrapper>
              <Checkbox id="auth_checkbox" />
              <AuthorizationLabel htmlFor="auth_checkbox">
                Запомнить
              </AuthorizationLabel>
            </AuthorizationCheckboxWrapper>
            <AuthorizationButton type="submit">Войти</AuthorizationButton>
          </AuthorizationFooter>
        </AuthorizationForm>
        <AuthSocials />
      </AuthorizationContainer>
    </AuthorizationWrapper>
  );
}
