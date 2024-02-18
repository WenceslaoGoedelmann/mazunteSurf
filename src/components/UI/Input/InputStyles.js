import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 0.5rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //width: 50%;
  color: black;
  font-weight: 600;
`;

export const InputStyled = styled.input`
  width: 300px;
  padding: 1rem 1rem;
  color: white;
  background-color: white;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: black;

   :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fb103d inset;
  } 

`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
