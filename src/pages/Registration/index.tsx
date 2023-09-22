import {
  AuthorizationLink, HomePageButtonWrapper,
  RegistrationButton,
  RegistrationContainer,
  RegistrationForm,
  RegistrationHeader,
  RegistrationLogin,
  RegistrationPassword,
  RegistrationTitle,
  RegistrationWrapper
} from "@/pages/Registration/index.styles";
import { HomepageButton } from '@/components/HomepageButton';

export function Registration() {
  return (
    <RegistrationWrapper>
      <RegistrationContainer>
        <HomePageButtonWrapper>
          <HomepageButton />
        </HomePageButtonWrapper>
        <RegistrationForm>
          <RegistrationHeader>
            <RegistrationTitle>Регестрация</RegistrationTitle>
            <AuthorizationLink to="/">Вход</AuthorizationLink>
          </RegistrationHeader>
          <RegistrationLogin placeholder="Почта / Телефон" />
          <RegistrationPassword placeholder="Пароль" />
          <RegistrationButton type="submit">
            Зарегестрироваться
          </RegistrationButton>
        </RegistrationForm>
      </RegistrationContainer>
    </RegistrationWrapper>
  );
}
