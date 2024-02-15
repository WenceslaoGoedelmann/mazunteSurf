import React from 'react'
import UncontrolledExample from '../../components/Carousels/Carousels'
import AboutUs from '../../components/AboutUs/AboutUs'


import { ContainerStyled } from './HomeStyles'

const Home = () => {
  return (
    <>
    <UncontrolledExample/>
    <ContainerStyled>
    <AboutUs/>
    
    </ContainerStyled>
    </>
  )
}

export default Home