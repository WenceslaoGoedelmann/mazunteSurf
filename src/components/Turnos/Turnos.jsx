import React, { useState , useEffect  } from "react";
import { ContainerStyled } from "./TurnosStyles";

import { useDispatch, useSelector } from "react-redux";
import CardTurno from "./CardTurno";



const Turnos = () => {
  const dispatch = useDispatch();
  const { turnos } = useSelector((state) => state.turnos);
  const [orden, setOrden] = useState("menor");

  let userTurnos= []

if(turnos){
  const turnosOrdenadosHora = [...turnos].sort(
    (a, b) => parseInt(a.hour) - parseInt(b.hour)
  );
  userTurnos =  turnosOrdenadosHora.slice().sort(
    (a, b) => new Date(b.date.split("/").reverse().toString().replaceAll(",", "-")) -  new Date(a.date.split("/").reverse().toString().replaceAll(",", "-"))
  );
}

  return (
    <ContainerStyled>
            {userTurnos?.map((turno, i) => (
              <CardTurno key={i} {...turno} />
            ))}
    </ContainerStyled>
  );
};

export default Turnos;
