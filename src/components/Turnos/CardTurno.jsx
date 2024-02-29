import React from "react";
import {
  CardBotton,
  CardLeft,
  CardMiddle,
  CardRight,
  CardTop,
  DateHour,
  DateStyles,
  TimeStyles,
  TurnoContainerStyled,
} from "./TurnosStyles";
import { useDispatch, useSelector } from "react-redux";

import CloseButton from "react-bootstrap/CloseButton";
import { deleteTurno, getUserTurnos } from "../axios/axios.turnos";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

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

{
  /* <Container fluid="lg">
      <Row>
        <Col  >
          <Card>
            <Card.Header >
            <Stack direction="horizontal" gap={3}>
              <div>Turno: #{_id.slice(16)}</div>
              <div className="ms-auto"><CloseButton onClick={(e) => handleClick(e)}/></div>
              </Stack>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Dia: {date}</ListGroup.Item>
                <ListGroup.Item>Hora: {hour}</ListGroup.Item>
                <ListGroup.Item>Estado: {status}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */
}

{
  /* <TurnoContainerStyled>
      <CardTop>
<h3>nombre:{nombre}</h3>
<h3>Apellido:{surname}</h3>
      </CardTop>
      <CardMiddle>
        <CardLeft>
        <TimeStyles>{hour} HS</TimeStyles>
        </CardLeft>
        <CardRight>
        <DateStyles>{date}</DateStyles>
        </CardRight>
        
      </CardMiddle>
      <CardBotton>
      <h3>Estado:{status}</h3>
      </CardBotton>
      <button onClick={(e)=>handleClick(e)}>Eliminar</button>
    </TurnoContainerStyled> */
}
