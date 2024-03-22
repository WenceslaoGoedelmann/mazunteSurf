import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseButton from "react-bootstrap/CloseButton";
import { deleteTurno, getUserTurnos } from "../axios/axios.turnos";


const CardTurno = ({ date, hour, status, _id }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    const confirmar = window.confirm("Desea eliminar el turno?");
    if (confirmar) {
      const turno = {
        _id: _id,
      };
      await deleteTurno(currentUser.token, turno);
      await getUserTurnos(currentUser.token, dispatch);
    }
  };
  return (
    <div className="card col-sm-10 col-md-8 col-lg-5   col-10  ">
      <div className="card-header d-flex gap-5">
        <div>Turno: #{_id.slice(16)}</div>
        <div className="ms-auto">
          <CloseButton onClick={(e) => handleClick(e)} />
        </div>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Dia: {date}</li>
          <li className="list-group-item">Hora: {hour}</li>
          <li className="list-group-item">Estado: {status}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardTurno;

