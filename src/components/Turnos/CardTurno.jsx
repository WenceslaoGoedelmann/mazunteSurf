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
import { deleteTurno } from "../axios/axios.turnos";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const CardTurno = ({ date, hour, nombre, surname, status, _id }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    const turno = {
      _id: _id,
    };
    await deleteTurno(currentUser.token, turno);
  };
  return (
    <Container fluid="lg">
      <Row>
        
        <Col  xs={12} md={8}>
          <Card>
            <Card.Header >
            <Stack direction="horizontal" gap={3}>
              <div>Turno: {_id}</div>
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
    </Container>
  );
};

export default CardTurno;

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
