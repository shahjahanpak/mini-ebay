import * as Yup from 'yup';

const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{6,})/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
});

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid Email Address').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password Too Short')
    .matches(
      passwordRegExp,
      'Password must be a combination of letters and numbers',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
