import React from "react";
import {
  CardBotton,
  CardLeft,
  CardMiddle,
  CardRight,
  CardTop,
  DateHour,
  DateStyles,
  TimeStyles,
  TurnoContainerStyled,

} from "./TurnosStyles";
import { useDispatch, useSelector } from "react-redux";

import CloseButton from 'react-bootstrap/CloseButton';

const CardTurno = ({ date,  hour,}) => {
  const dispatch = useDispatch();
  const fecha = date.split("-").reverse().toString().replaceAll(",", "/");

  return (
    <TurnoContainerStyled>
      <CardTop>
        <DateHour>
        
        
        </DateHour>
        
      </CardTop>
      <CardMiddle>
        <CardLeft>
        <TimeStyles>{hour} HS</TimeStyles>
        </CardLeft>
        <CardRight>
        <DateStyles>{date}</DateStyles>
        </CardRight>
        <CloseButton onClick={() => {}}/>
      </CardMiddle>
      <CardBotton>
      </CardBotton>
    </TurnoContainerStyled>
  );
};

export default CardTurno;
