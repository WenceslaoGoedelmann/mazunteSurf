import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-image: url("https://res.cloudinary.com/dtsltqjuw/image/upload/v1707095596/MazunteSurf/beach-5043177_1280_nzdvvd.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  width: 90%;
  p{
    color: black;
  }
`;
export const ExperienciaConteinerStyled = styled.div`
display: flex;
  flex-direction: column;
  width: 300px;
`;

export const RadioConteinerStyled = styled.div`

    display: flex;
    flex-direction: row;
    gap: 10px;
  
`;
export const RadioLabelStyled = styled.label`
  display: flex;
  margin: 0.5rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //width: 50%;
  color: black;
  font-weight: 600;
`;


export const LoginEmailStyled = styled(Link)`
  & p {
    color: black;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
