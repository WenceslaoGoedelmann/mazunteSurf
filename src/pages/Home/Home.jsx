import React from 'react'

import AboutUs from '../../components/AboutUs/AboutUs'


import { ContainerStyled } from './HomeStyles'
import CarouselAge from '../../components/CarouselAge/CarouselAge'

import CarouselHero from '../../components/CarouselHero/CarouselHero'
import CarouselClass from '../../components/CarouselClass/CarouselClass'
import Contacto from '../../components/Contacto/Contacto'


const Home = () => {
  return (
    <>
    <CarouselHero/>
    <ContainerStyled>
    <AboutUs/>
    <CarouselAge/>
    <CarouselClass/>
    <Contacto/>

    </ContainerStyled>
    </>
  )
}

export default Home