import React from "react";

import { ErrorMessage, Field } from "formik";
import {
  ErrorMessageStyled,
  InputBoxStyled,
  InputLabelStyled,
} from "../Input/InputStyles";
import { SelectedStyled } from "./SelectStyles";

const Select = ({ children, name, htmlFor, type, id, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputBoxStyled>
          <InputLabelStyled htmlFor={htmlFor}>{htmlFor}</InputLabelStyled>
          <SelectedStyled
            id={id}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          >
            {children}
          </SelectedStyled>
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputBoxStyled>
      )}
    </Field>
  );
};

export default Select;
