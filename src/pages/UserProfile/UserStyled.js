import styled from 'styled-components';


export const ContainerStyled = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  align-items: center;


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