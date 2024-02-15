import React from "react";
import { Formik } from "formik";

import Submit from "../../components/UI/Submit/Submit";

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from "./RegisterStyles";
import { useDispatch } from "react-redux";

import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";

import Loader from "../../components/UI/Loader/Loader";
import Input from "../../components/UI/Input/Input";
import { createUser } from "../../components/axios/axios.user";
import { setCurrentUser } from "../../redux/user/userSlice";
import { Field } from "formik";

const Register = () => {
  const dispatch = useDispatch();

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.nombre,
            values.surname,
            values.age,
            values.height,
            values.weight,
            values.experience,
            values.email,
            values.cellphone,
            values.location,
            values.address,
            values.password,
            values.adminKey
          );

          actions.resetForm();
          //actions.preventDefault()
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <Form>
          <Input type="text" name="nombre" placeholder="Nombre">
            Nombre
          </Input>
          <Input type="text" name="surname" placeholder="Apellido">
            Apellido
          </Input>
          <Input type="number" name="age" placeholder="Edad">
            Edad
          </Input>
          <Input type="number" name="height" placeholder="Altura">
            Altura
          </Input>
          <Input type="number" name="weight" placeholder="Peso">
            Peso
          </Input>
          <div>
            <label>
              <Field type="radio" name="experience" value="Nada" />
              Nada
            </label>
            <label>
              <Field type="radio" name="experience" value="Media" />
              Media
            </label>
            <label>
              <Field type="radio" name="experience" value="Mucha" />
              Mucha
            </label>
          </div>
          <Input type="text" name="email" placeholder="Email">
            Email
          </Input>
          <Input type="number" name="cellphone" placeholder="Celular">
            Celular
          </Input>
          <Input type="text" name="location" placeholder="Ciudad">
            Ciudad
          </Input>
          <Input type="text" name="address" placeholder="Dirección">
            Dirección
          </Input>
          <Input type="password" name="password" placeholder="Contraseña">
            Contraseña
          </Input>
          <Input
              type="password"
              name="passwordConfirmation"
              placeholder="Repetir contraseña"
            >
              Repetir contraseña
            </Input>
            <Input type="password" name="adminKey" placeholder="Contraseña De Administrador">
            Contraseña De Administrador
          </Input>

          <LoginEmailStyled to="/login">
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type="button">Registrate</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
