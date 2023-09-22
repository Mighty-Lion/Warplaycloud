import {
  AgreementContainer,
  AgreementLink,
  AuthorizationLink,
  HomePageButtonWrapper,
  RegistrationButton, RegistrationButtonWrapper,
  RegistrationContainer,
  RegistrationForm,
  RegistrationHeader,
  RegistrationLogin,
  RegistrationPassword,
  RegistrationTitle,
  RegistrationWrapper
} from "@/pages/Registration/index.styles";
import { HomepageButton } from '@/components/HomepageButton';
import { Checkbox } from '@/components/Checkbox';
import WindowsImage from '@/assets/images/png/Windows.png';
import { AuthSocials } from "@/components/AuthSocials";

export function Registration() {
  return (
    <RegistrationWrapper>
      <RegistrationContainer>
        <HomePageButtonWrapper>
          <HomepageButton />
        </HomePageButtonWrapper>
        <RegistrationForm>
          <RegistrationHeader>
            <RegistrationTitle>Регистрация</RegistrationTitle>
            <AuthorizationLink to="/">Вход</AuthorizationLink>
          </RegistrationHeader>
          <RegistrationLogin placeholder="Почта / Телефон" />
          <RegistrationPassword placeholder="Пароль" />
          <RegistrationButtonWrapper>
            <RegistrationButton type="submit">
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
