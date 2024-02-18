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
    <Container border="secondary" fluid="lg">
      <Row>
        <Col xs={12} md={8}>
          <Card border="secondary" className="m-3">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Turno">
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><b>Nombre y Apellido:</b> {nombre} {surname}
                  </ListGroup.Item>
                  <ListGroup.Item><b>Dia:</b> {date}</ListGroup.Item>
                  <ListGroup.Item><b>Hora:</b> {hour}</ListGroup.Item>
                  <ListGroup.Item><b>Estado:</b> {status}</ListGroup.Item>
                </ListGroup>
              </Tab>
              <Tab eventKey="contact" title="Contacto">
                <Row>
                  <Col>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item><b>Nombre:</b> {nombre}</ListGroup.Item>
                  <ListGroup.Item><b>Celular:</b> {cellphone}</ListGroup.Item>
                  <ListGroup.Item><b>Ciudad:</b> {location}</ListGroup.Item>
                  <ListGroup.Item><b>Edad:</b> {age}</ListGroup.Item>
                  <ListGroup.Item><b>Altura:</b> {height}</ListGroup.Item>
                </ListGroup>
                </Col>
                <Col>
              <ListGroup className="list-group-flush">
                  <ListGroup.Item><b>Apellido:</b> {surname}</ListGroup.Item>
                  <ListGroup.Item><b>Email:</b> {email}</ListGroup.Item>
                  <ListGroup.Item><b>Direccion:</b> {address}</ListGroup.Item>
                  <ListGroup.Item><b>Peso:</b> {weight}</ListGroup.Item>
                  <ListGroup.Item><b>Experiencia:</b> {experience}</ListGroup.Item>
                </ListGroup>
                </Col>
                </Row>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCardTurno;

{
  /* <TurnoContainerStyled>
<h3>
  Nombre: <span>{nombre}</span>
</h3>
<h3>
  Apellido: <span>{surname}</span>
</h3>
<h3>
  Email: <span>{email}</span>
</h3>
<DateStyles>{date}</DateStyles>
<TimeStyles>{hour}Hs </TimeStyles>
<h3>
  Estado: <span>{status}</span>
</h3>
<InputSelectStyled
  name="hour"
  htmlFor="Hora"
  id="hora"
  onChange={(e) => handleChange(e.target.value)}
>
  <option value="">Seleccionar</option>
  <option value="confirmado">Confirmar</option>
  <option value="cancelado">Cancelar</option>
</InputSelectStyled>
</TurnoContainerStyled> */
}
