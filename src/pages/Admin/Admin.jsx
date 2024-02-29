import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminGetTurnos } from "../../components/axios/axios.turnos";

import CardTurno from "../../components/Turnos/CardTurno";
import AdminCardTurno from "./AdminCardTurno";
import {
  InputSelectStyled,
  InputStyled,
  SearchContainerStyled,
  TurnoContainerStyled,
} from "./AdminStyles";
import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";

const Admin = () => {
  const { token } = useSelector((state) => state.user.currentUser);
  const [option, setOption] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState("text");

  const [orden, setOrden] = useState("menor");
  const dispatch = useDispatch();

  const { adminTurnos, loading } = useSelector((state) => state.turnos);

  let turnos = [];

  if (adminTurnos && orden === "mayor") {
    const turnosOrdenadosHora = [...adminTurnos].sort(
      (a, b) => parseInt(a.hour) - parseInt(b.hour)
    );
    turnos = turnosOrdenadosHora
      .slice()
      .sort(
        (a, b) =>
          new Date(
            b.date.split("/").reverse().toString().replaceAll(",", "-")
          ) -
          new Date(a.date.split("/").reverse().toString().replaceAll(",", "-"))
      );
  }
  if (adminTurnos && orden === "menor") {
    const turnosOrdenadosHora = [...adminTurnos].sort(
      (a, b) => parseInt(a.hour) - parseInt(b.hour)
    );
    turnos = turnosOrdenadosHora
      .slice()
      .sort(
        (a, b) =>
          new Date(
            a.date.split("/").reverse().toString().replaceAll(",", "-")
          ) -
          new Date(b.date.split("/").reverse().toString().replaceAll(",", "-"))
      );
  }

  const getTurnos = async () => {
    await AdminGetTurnos(token, data, dispatch);
    setOption("");
    setData({});
  };

  const inputHandleChange = (value) => {
    if (option === "todos") {
      setData({});
      return;
    }
    if (option === "dia") {
      const date = value.split("-").reverse().toString().replaceAll(",", "/");
      setData({ date: `${date}` });
      return;
    }
    if (option === "nombre") {
      setData({ nombre: `${value}` });
      return;
    }
    if (option === "apellido") {
      setData({ surname: `${value}` });
      return;
    }
    if (option === "email") {
      setData({ email: `${value}` });
      return;
    }
    if (option === "estado") {
      setData({ status: `${value}` });
      return;
    }
  };

  return (
    <TurnoContainerStyled>
      <h3>Buscar turnos:</h3>
      <SearchContainerStyled>
        <InputSelectStyled
          onChange={(e) => {
            setOption(e.target.value);
            if (e.target.value === "todos") {
              setTipo("text");
            }
            if (e.target.value === "dia") {
              setTipo("date");
            }
            if (e.target.value === "nombre") {
              setTipo("text");
            }
            if (e.target.value === "apellido") {
              setTipo("text");
            }
            if (e.target.value === "email") {
              setTipo("email");
            }
            if (e.target.value === "estado") {
              setTipo("text");
            }
          }}
        >
          <option>Seleccionar</option>
          <option value="todos">Todos Los Turnos</option>
          <option value="dia">buscar por dia</option>
          <option value="nombre">buscar por nombre</option>
          <option value="apellido">buscar por apellido</option>
          <option value="email">buscar por email</option>
          <option value="estado">buscar por estado</option>
        </InputSelectStyled>

        {option === "todos" ? (
          ""
        ) : (
          <InputStyled
            type={tipo}
            placeholder={option}
            disabled={option === "todos"}
            onChange={(e) => {
              inputHandleChange(e.target.value);
            }}
          />
        )}

        <button
          type="button"
          className="btn btn-secondary"
          onClick={(e) => getTurnos()}
        >
          {loading ? <Loader /> : "Buscar"}
        </button>
      </SearchContainerStyled>
      <h3>Ordenar:</h3>
      <InputSelectStyled onChange={(e) => setOrden(e.target.value)}>
        <option value="menor">Mas Antiguos Primero</option>
        <option value="mayor">Mas Recientes Primero</option>
      </InputSelectStyled>

      <div className="container d-flex flex-column gap-3 py-3">
        {turnos?.map((turno, i) => (
          <AdminCardTurno key={i} {...turno} />
        ))}
      </div>
    </TurnoContainerStyled>
  );
};

export default Admin;
