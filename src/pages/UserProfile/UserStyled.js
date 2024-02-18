import styled from 'styled-components';


export const ContainerStyled = styled.div`

padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url("https://res.cloudinary.com/dtsltqjuw/image/upload/v1707095596/MazunteSurf/beach-5043177_1280_nzdvvd.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;


`;

export const UserContainerStyled = styled.div`

display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 500px;
  background: #3c3c3c;
  border: 2px black solid;
  //box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem 0 1rem 0;
  border-radius: 15px;
  h3{
    font-size: 15px;
    color: white;
    span{
      color: black;
    }
  }


`;