import React, { useEffect } from "react";
import { ContainerStyled, UserContainerStyled } from "./UserStyled";
import { useDispatch, useSelector } from "react-redux";
import { getUserTurnos } from "../../components/axios/axios.turnos";
import Turnos from "../../components/Turnos/Turnos";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Loader from "../../components/UI/Loader/Loader";
import LoaderCard from "../../components/UI/LoaderCard/LoaderCard";

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
  const { turnos, loading } = useSelector((state) => state.turnos);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!turnos) {
      getUserTurnos(token, dispatch);
    }
  }, [dispatch, token, turnos]);

  return (
    <ContainerStyled>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi Perfil</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Nombre: </b>
              {nombre}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Apellido: </b>
              {surname}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Telefono:</b> {cellphone}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Email:</b> {email}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Ciudad:</b> {location}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Direccion:</b> {address}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Edad:</b> {age}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Altura:</b> {height}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Peso:</b> {weight}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Experiencia:</b> {experience}
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="container px-20">
        <h2 className="text-center py-1">Hola {nombre}</h2>
        <div className="text-center">
          <Button
            variant="secondary"
            size="sm"
            sticky="top"
            className="text-center py-1"
            onClick={handleShow}
          >
            Mis Datos
          </Button>
        </div>

        <h3 className="text-center py-4">Mis Turnos</h3>

        <div className="container  pb-5">
       
          {loading ? (
            <LoaderCard/>
          ) : (
            <Turnos />
          )}
        </div>
      </div>
    </ContainerStyled>
  );
};

export default User;

