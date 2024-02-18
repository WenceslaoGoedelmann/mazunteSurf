import React from "react";
import {
  Form,
  LoginContainerStyled,

  LoginPasswordStyled,
} from "./LoginStyles";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Submit from "../../components/UI/Submit/Submit";
import { useDispatch } from "react-redux";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import Loader from "../../components/UI/Loader/Loader";

import { setCurrentUser } from '../../redux/user/userSlice';
import { loginUser } from "../../components/axios/axios.user";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
            navigate("/")
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input htmlFor="Email" type="text" name="email" placeholder="Email">
              Email
            </Input>
            <Input
              htmlFor="Contraseña"
              type="password"
              name="password"
              placeholder="Password"
            >
              Contraseña
            </Input>
            <Submit type="button">
              {isSubmitting ? <Loader /> : "Ingresar"}
            </Submit>
            <Link to="/forgot-password">
              <LoginPasswordStyled>
                ¿Olvidaste la contraseña? Reestablecela
              </LoginPasswordStyled>
            </Link>
            <Link to="/register">
              <LoginPasswordStyled>¿No tenes cuenta? Crea una</LoginPasswordStyled>
            </Link>
            
          </Form>
        )}
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
