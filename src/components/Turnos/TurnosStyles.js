import styled from 'styled-components';


export const ContainerStyled = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  align-items: center;


`;

export const TurnoContainerStyled = styled.div`
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

export const CardTop= styled.div`
  display: flex;
  justify-content: space-between;
  
`;

export const DateHour= styled.div`
    display: flex;
    //gap:30px;
    margin-left: 30px;
    margin-right: 90px;

`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px
`;
export const CardMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  gap:25px;
`;

export const CardBotton = styled.div`
  display: flex;
 

  gap: 30px
`;

export const TimeStyles = styled.div`
  padding: 5px 15px;
  border-radius: 80px;
  text-align: center;
background-color: black;
color:white;
margin-bottom: 20px;

`;

export const DateStyles = styled.div`
  padding: 5px 15px;
  border-radius: 80px;
  text-align: center;
background-color: grey;
color:white;
margin-bottom: 20px;

`;




