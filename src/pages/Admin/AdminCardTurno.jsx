import React from "react";
import { DateStyles, TimeStyles, TurnoContainerStyled } from "./AdminStyles";
import { InputSelectStyled } from "../../components/DateHour/DateHourStyles";
import { UpdateTurno } from "../../components/axios/axios.turnos";
import { useDispatch, useSelector } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const AdminCardTurno = ({
  date,
  hour,
  nombre,
  surname,
  age,
  email,
  cellphone,
  location,
  address,
  height,
  weight,
  experience,
  status,
  _id,
}) => {
  const { currentUser } = useSelector((state) => state.user);

  const handleChange = (value) => {
    let statusUpdate = {
      _id,
      status: value,
    };
    UpdateTurno(currentUser.token, statusUpdate);
  };

  return (
    <div className="container col-lg-8 ">
      <div className="card  p-2 ">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Turno
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Contacto
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >

              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Nombre y Apellido:</b> {nombre} {surname}</li>
                <li className="list-group-item"><b>Dia:</b> {date}</li>
                <li className="list-group-item"><b>Hora:</b> {hour}</li>
                <li className="list-group-item"><b>Estado:</b> {status}  
                    <InputSelectStyled
                      onChange={(e) => handleChange(e.target.value)}
                    >
                      <option>Seleccionar</option>
                      <option value="confirmado">Confirmar</option>
                      <option value="cancelado">Cancelar</option>
                    </InputSelectStyled></li>

              </ul>
         </div>
        <div
          class="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <div className="row">
            <div className="col">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Nombre:</b> {nombre}</li>
                <li className="list-group-item"><b>Celular:</b> {cellphone}</li>
                <li className="list-group-item"><b>Ciudad:</b> {location}</li>
                <li className="list-group-item"> <b>Edad:</b> {age}</li>
                <li className="list-group-item"> <b>Altura:</b> {height}</li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Apellido:</b> {surname}</li>
                <li className="list-group-item"><b>Email:</b> {email}</li>
                <li className="list-group-item"><b>Direccion:</b> {address}</li>
                <li className="list-group-item"><b>Peso:</b> {weight}</li>
                <li className="list-group-item"><b>Experiencia:</b> {experience}</li>
              </ul>
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminCardTurno;

