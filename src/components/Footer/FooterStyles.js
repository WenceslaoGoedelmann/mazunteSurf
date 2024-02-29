import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 ;
  background-color: #f8f9fa;
  p{color:black}

  a {  display: flex;
  
  justify-content: center;
  align-items: center;
  gap: 10px;
color: #212529;
font-size: 1.2rem;
font-weight: 600;
cursor: pointer;
}
  img {
    width: 50px;
    height: 40px;
    border-radius: 10px;
  }
  @media (max-width: 425px) {
    p{
      font-size: 0.6rem;
    }
    a{
      font-size: 0.8rem;
    }
    img {
    width: 35px;
    height: 35px;
    border-radius: 8px;
  }

  }
`;

export const LinksContainerStyled = styled.div`
  margin-bottom: 2rem;
`;
