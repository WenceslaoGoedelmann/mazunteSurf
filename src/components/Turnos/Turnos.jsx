import React, { useState } from "react";
import { ContainerStyled } from "./TurnosStyles";

import { useDispatch, useSelector } from "react-redux";
import CardTurno from "./CardTurno";
import Submit from "../UI/Submit/Submit";


const Turnos = () => {
  const dispatch = useDispatch();
  const { turnos } = useSelector((state) => state.turnos);
  const [orden, setOrden] = useState("menor");

  //let turnoOrdenado = [...turnos]

/*   const turnosOrdenadosHora = turnoOrdenado.sort(
    (a, b) => parseInt(a.hour) - parseInt(b.hour)
  );

  if (orden === "menor") {
    turnoOrdenado =  turnosOrdenadosHora.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }
  if (orden === "mayor") {
     turnoOrdenado = turnosOrdenadosHora.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    
  } */

  return (
    <ContainerStyled>
      {/* <select
        onChange={(e) => setOrden(e.target.value)}
      >
        <option value="menor">Menor a Mayor</option>
        <option value="mayor">Mayor a Menor</option>
      </select> 
      {turnoOrdenado.map((turno, i) => (
        <CardTurno key={i} {...turno} />
      ))}
      */}
      {turnos?.map((turno, i) => (
        <CardTurno key={i} {...turno} />
      ))}
     
    </ContainerStyled>
  );
};

export default Turnos;
