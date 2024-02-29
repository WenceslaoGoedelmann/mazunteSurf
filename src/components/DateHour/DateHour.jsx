import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  BtnContainerStyled,
  DateHourContainerStyled,
  InputContainerStyled,
  InputDateStyled,
  InputSelectStyled,
} from "./DateHourStyles";
import { ButtonSubmitStyled } from "../UI/Submit/SubmitStyles";
import { createTurno, getHours } from "../axios/axios.turnos";
import Loader from "../UI/Loader/Loader";

const DateHour = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.user);
  const { hours, loading } = useSelector((state) => state.turnos);
  const [dia, setDate] = useState("");
  const [hour, setHour] = useState("");

  const handleChange = async (e) => {
    const date = e.target.value
      .split("-")
      .reverse()
      .toString()
      .replaceAll(",", "/");
    setDate(date);
    await getHours(date,dispatch)
  };

  let horas = [];

  if(hours){
    horas = [...hours];
  }

  const horasSeleccionadas = (val) => {
    return horas.some((hora) => hora === val);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const turno= {
      date:dia,
      hour:hour
    }
       await createTurno(turno,currentUser)
       await getHours(dia,dispatch)
  };

  return (
    <DateHourContainerStyled>
      <InputContainerStyled>
        <InputDateStyled
          name="date"
          type="date"
          onChange={(e) => handleChange(e)}
        />
        {loading?
        <Loader  styles={{ height: '50px', width: '50px', border: '5px dashed black' }}/>:
        <InputSelectStyled
        name="hour"
        htmlFor="Hora"
        id="hora"
        onChange={(e) => setHour(e.target.value)}
        disabled={dia === ""}
      >
        <option value="">HH:MM</option>
        <option value="08:00" disabled={horasSeleccionadas("08:00")}>
          08:00
        </option>
        <option value="09:00" disabled={horasSeleccionadas("09:00")}>
          09:00
        </option>
        <option value="10:00" disabled={horasSeleccionadas("10:00")}>
          10:00
        </option>
        <option value="11:00" disabled={horasSeleccionadas("11:00")}>
          11:00
        </option>
        <option value="12:00" disabled={horasSeleccionadas("12:00")}>
          12:00
        </option>
        <option value="13:00" disabled={horasSeleccionadas("13:00")}>
          13:00
        </option>
        <option value="14:00" disabled={horasSeleccionadas("14:00")}>
          14:00
        </option>
        <option value="15:00" disabled={horasSeleccionadas("15:00")}>
          15:00
        </option>
        <option value="16:00" disabled={horasSeleccionadas("16:00")}>
          16:00
        </option>
        <option value="17:00" disabled={horasSeleccionadas("17:00")}>
          17:00
        </option>
        <option value="18:00" disabled={horasSeleccionadas("18:00")}>
          18:00
        </option>
      </InputSelectStyled>
        }
       
      </InputContainerStyled>
      <BtnContainerStyled>
        <ButtonSubmitStyled onClick={(e) => handleSubmit(e)}>
          Confirmar
        </ButtonSubmitStyled>
      </BtnContainerStyled>
    </DateHourContainerStyled>
  );
};

export default DateHour;

/* const DateHour = () => {
  const dispatch = useDispatch();
  const { turnos } = useSelector((state) => state.agenda);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  

  //console.log(dia)

  const turnosSegunFecha = turnos
    .filter((turno) => turno.date === date)
    .map((turno) => turno.hour);

  const horasSeleccionadas = (val) => {
    return turnosSegunFecha.some((hora) => hora === val);
  };

  const handleSubmit = (e, hour, date) => {
    e.preventDefault();
    console.log(hour, date)
    dispatch(selectDate({ hour, date }));
  
  };

  return (
    <DateHourContainerStyled>
      <InputContainerStyled>
        <InputDateStyled
          name="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <InputSelectStyled
          name="hour"
          htmlFor="Hora"
          id="hora"
          onChange={(e) => setHour(e.target.value)}
          disabled={date===""}
        >
          <option value="">HH:MM</option>
          <option value="08:00" disabled={horasSeleccionadas("08:00")}>
            08:00
          </option>
          <option value="09:00" disabled={horasSeleccionadas("09:00")}>
            09:00
          </option>
          <option value="10:00" disabled={horasSeleccionadas("10:00")}>
            10:00
          </option>
          <option value="11:00" disabled={horasSeleccionadas("11:00")}>
            11:00
          </option>
          <option value="12:00" disabled={horasSeleccionadas("12:00")}>
            12:00
          </option>
          <option value="13:00" disabled={horasSeleccionadas("13:00")}>
            13:00
          </option>
          <option value="14:00" disabled={horasSeleccionadas("14:00")}>
            14:00
          </option>
          <option value="15:00" disabled={horasSeleccionadas("15:00")}>
            15:00
          </option>
          <option value="16:00" disabled={horasSeleccionadas("16:00")}>
            16:00
          </option>
          <option value="17:00" disabled={horasSeleccionadas("17:00")}>
            17:00
          </option>
          <option value="18:00" disabled={horasSeleccionadas("18:00")}>
            18:00
          </option>
        </InputSelectStyled>
      </InputContainerStyled>
      <BtnContainerStyled>
      <ButtonSubmitStyled onClick={(e) => handleSubmit(e, hour, date)}>
        Confirmar
      </ButtonSubmitStyled>
      </BtnContainerStyled>
    </DateHourContainerStyled>
  );
}; */
