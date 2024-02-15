import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

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



export const LoginEmailStyled = styled(Link)`
  & p {
    color: black;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
