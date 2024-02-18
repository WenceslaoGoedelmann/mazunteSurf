import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminGetTurnos } from "../../components/axios/axios.turnos";
import { InputSelectStyled } from "../../components/DateHour/DateHourStyles";
import CardTurno from "../../components/Turnos/CardTurno";
import AdminCardTurno from "./AdminCardTurno";

const Admin = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [option, setOption] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState("text");
  const dispatch = useDispatch();

  const { adminTurnos } = useSelector((state) => state.turnos);


 
console.log(tipo)



  const inputHandleChange = (value) => {
    if (option === "todos") {
      setData({});
      return;
    }
    if (option === "dia") {
      const date = value
      .split("-")
      .reverse()
      .toString()
      .replaceAll(",", "/");
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
    <>
      <h1>Hola</h1>
      <InputSelectStyled
        name="hour"
        htmlFor="Hora"
        id="hora"
        onChange={(e) =>{ 
          setOption(e.target.value)
          if (e.target.value === "todos") {
            setTipo("text")
          }
          if (e.target.value === "dia") {
            setTipo("date")
          }
          if (e.target.value === "nombre") {
            setTipo("text")
          }
          if (e.target.value === "apellido") {
            setTipo("text")
          }
          if (e.target.value === "email") {
            setTipo("email")
          }
          if (e.target.value === "estado") {
            setTipo("text")
          }}
        }
      >
        <option value="todos">Todos Los Turnos</option>
        <option value="dia">buscar por dia</option>
        <option value="nombre">buscar por nombre</option>
        <option value="apellido">buscar por apellido</option>
        <option value="email">buscar por email</option>
        <option value="estado">buscar por estado</option>
      </InputSelectStyled>
      <input type={tipo} onChange={(e) => inputHandleChange(e.target.value)} />
      <button
        onClick={async (e) => {
          await AdminGetTurnos(currentUser.token, data, dispatch);
          setOption("todos");
          setData({});
        }}
      >
        turnos
      </button>
      {adminTurnos.map((turno, i) => (
        <AdminCardTurno key={i} {...turno} />
      ))}

    </>
  );
};

export default Admin;
