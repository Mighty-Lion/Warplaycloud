import * as Yup from 'yup';
import { useFormik } from 'formik';

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateEmail = (email: string | undefined) => {
  return Yup.string()
    .email()
    .matches(re, 'Is not in correct format')
    .isValidSync(email);
};

const validatePhone = (phone: number | undefined) => {
  return Yup.number()
    .integer()
    .positive()
    .test(() => {
      return !!(
        phone &&
        phone.toString().length >= 8 &&
        phone.toString().length <= 14
      );
    })
    .isValidSync(phone);
};

const loginValidationSchema = Yup.object({
  emailorphone: Yup.string()
    .required('Email / Phone is required')
    .test('emailorphone', 'Email / Phone is invalid', (value) => {
      return validateEmail(value) || validatePhone(parseInt(value ?? '0', 10));
    }),
  password: Yup.string()
    .required('Password cannot be empty')
    .min(6, 'Password must be at least 6 char'),
});

export function useValidation() {
  const formik = useFormik({
    initialValues: {
      id: undefined,
      emailorphone: 'Почта / Телефон',
      password: 'Пароль',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
}
