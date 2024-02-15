import * as Yup from 'yup';
import { regEmail } from '../utils/regExp';


export const formValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  surname: Yup.string().required('Campo requerido'),
  age: Yup.number().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  email: Yup.string().required('Campo requerido'),
  comment: Yup.string(),


});

export const loginValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
  password: Yup.string().min(6, 'Míno de caracteres: 6').required('Campo requerido')
})

export const registerValidationSchema = Yup.object({
  nombre: Yup.string().required('Campo requerido'),
  surname: Yup.string().required('Campo requerido'),
  age: Yup.number().required('Campo requerido'),
  height: Yup.number().required('Campo requerido'),
  weight: Yup.number().required('Campo requerido'),
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
  cellphone: Yup.number().required('Campo requerido'),
  location: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
  password: Yup.string().min(6, 'Míno de caracteres: 6').required('Campo requerido'),
 passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden').required('Campo requerido'),
adminKey:Yup.string()
})

export const verifyValidationSchema = Yup.object({
  code: Yup.string().required('Campo requerido'),
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
})

