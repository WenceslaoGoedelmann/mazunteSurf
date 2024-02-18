import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const LoginContainerStyled = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://res.cloudinary.com/dtsltqjuw/image/upload/v1707095596/MazunteSurf/beach-5043177_1280_nzdvvd.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  h1 {
    font-weight: 600;
    color: black;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  // width: 900px;
  //gap: 10px;
  p {
    color: black;
  }
`;

export const LoginPasswordStyled = styled.p`
  margin: 0;
  padding: 1rem 0;

  color: black;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
