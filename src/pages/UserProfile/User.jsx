import React from "react";
import { ContainerStyled, UserContainerStyled } from "./UserStyled";
import { useDispatch, useSelector } from "react-redux";
import { getUserTurnos } from "../../components/axios/axios.turnos";
import Turnos from "../../components/Turnos/Turnos";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi Perfil</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item><b>Nombre: </b>{nombre}</ListGroup.Item>
            <ListGroup.Item><b>Apellido: </b>{surname}</ListGroup.Item>
            <ListGroup.Item><b>Telefono:</b> {cellphone}</ListGroup.Item>
            <ListGroup.Item> <b>Email:</b> {email}</ListGroup.Item>
            <ListGroup.Item> <b>Ciudad:</b> {location}</ListGroup.Item>
            <ListGroup.Item> <b>Direccion:</b> {address}</ListGroup.Item>
            <ListGroup.Item> <b>Edad:</b> {age}</ListGroup.Item>
            <ListGroup.Item> <b>Altura:</b> {height}</ListGroup.Item>
            <ListGroup.Item> <b>Peso:</b> {weight}</ListGroup.Item>
            <ListGroup.Item> <b>Experiencia:</b> {experience}</ListGroup.Item>

          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      <button onClick={async () => await getUserTurnos(token, dispatch)}>
  Mis Turnos
</button>
      <Turnos />
    </Container>
  );
};

export default User;

{
  /* <ContainerStyled>
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
</ContainerStyled> */
}
