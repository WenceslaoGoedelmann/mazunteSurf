import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./dateStyle.css";

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
import DatePicker, {registerLocale} from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {addDays, isWeekend} from "date-fns";
import es from 'date-fns/locale/es';
registerLocale("es", es);

const DateHour = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.user);
  const { hours, loading } = useSelector((state) => state.turnos);
  const [dia, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = async (date) => {
    setStartDate(date)
    
    var anio = date.getFullYear();
    var dia = date.getDate();
    var _mes = date.getMonth();
    _mes = _mes +1
    if (_mes < 10)
    { var mes = "0" + _mes;}
    else
    { var mes = _mes.toString;}
    var diaSelec = `${dia}/${mes}/${anio}`
    console.log(diaSelec)
    setDate(diaSelec);
    await getHours(diaSelec,dispatch)
  };

  const isWeekendDay = (date) => {
    return isWeekend(date)
  }
  

  const filterWeekend = (date) => {
    return !isWeekendDay(date) 
  }
 



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

  const minDate = new Date()




  return (
    <DateHourContainerStyled>
      <InputContainerStyled>

        <DatePicker 
        selected={startDate} 
        onChange={handleChange}
        minDate={minDate}
        filterDate={filterWeekend}
        dateFormat={"dd-MM-yyyy"}
        locale="es"
        className="inputDateStyled"
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


/* const handleChange = async (e) => {
  const date = e.target.value
    .split("-")
    .reverse()
    .toString()
    .replaceAll(",", "/");
  setDate(date);
  await getHours(date,dispatch)
}; */


{/* <InputDateStyled
name="date"
type="date"
onChange={(e) => handleChange(e)}
/> */}
