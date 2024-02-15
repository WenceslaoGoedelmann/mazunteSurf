import React from "react";
import { ContainerStyled, UserContainerStyled } from "./UserStyled";
import { useDispatch, useSelector } from "react-redux";
import { getUserTurnos } from "../../components/axios/axios.turnos";
import Turnos from "../../components/Turnos/Turnos";

const User = () => {
  const {
    nombre,
    email,
    cellphone,
    location,
    address,
    height,
    weight,
    experience,
    token,
    surname,
    age,
  } = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { turnos } = useSelector((state) => state.turnos);
  console.log(turnos);
  return (
    <ContainerStyled>
      <UserContainerStyled>
        <h3>
          Nombre: <span>{nombre}</span>
        </h3>
        <h3>
          Apellido: <span>{surname}</span>
        </h3>
        <h3>
          Telefono: <span>{cellphone}</span>
        </h3>
        <h3>
          Email: <span>{email}</span>
        </h3>
        <h3>
          Ciudad: <span>{location}</span>
        </h3>
        <h3>
          Direccion: <span>{address}</span>
        </h3>
        <h3>
          Edad: <span>{age}</span>{" "}
        </h3>
        <h3>
          Altura: <span>{height}</span>
        </h3>
        <h3>
          Peso: <span>{weight}</span>
        </h3>
        <h3>
          Experiencia: <span>{experience}</span>
        </h3>
      </UserContainerStyled>
      <button onClick={async () => await getUserTurnos(token, dispatch)}>
        Mis Turnos
      </button>
      <Turnos />
    </ContainerStyled>
  );
};

export default User;
