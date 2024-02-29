import styled from 'styled-components';

export const TurnoContainerStyled = styled.div`
  background-image: url("https://res.cloudinary.com/dtsltqjuw/image/upload/v1707095596/MazunteSurf/beach-5043177_1280_nzdvvd.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 80vh;
  display: flex;
  flex-direction: column;

    align-items: center;
`;

export const SearchContainerStyled = styled.div`

  display: flex;
  align-items: center;
  gap: 15px;

  padding: 20px;
`;
export const InputSelectStyled = styled.select`
  background-color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  height: 45px;
  padding: 0.5rem 1rem;
  color: black;
  width: 200px;
  
`;

export const InputStyled = styled.input`
  width: 200px;
  height: 45px;
  padding: 0.5rem 1rem;
  color: white;
  background-color: white;
  border-radius: 15px;
  border: none;
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 10%;
  }

  -webkit-text-fill-color: black;

   :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fb103d inset;
  } 



`;