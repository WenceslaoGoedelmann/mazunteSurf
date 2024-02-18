import React from 'react'
import DateHour from '../../components/DateHour/DateHour'
import { ContainerStyled } from './TurnoStyled'
import { useDispatch, useSelector } from "react-redux";

const Turno = () => {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <ContainerStyled>
      <h2>Hola {currentUser.nombre}</h2>
    <h3>Reserva tu turno:</h3>
    <DateHour/>
    </ContainerStyled>
  )
}

export default Turno