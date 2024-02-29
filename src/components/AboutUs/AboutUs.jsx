import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container px-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center my-5">
            <p className="lead  fw-bolder mb-4 " >
              ¡Bienvenidos a la Escuela Mazunte Surf! Una cosa que debes saber
              sobre nosotros primero es que nuestro objetivo es pasar un buen
              rato, disfrutar de las hermosas olas de Mazunte y enseñar a
              surfear a personas de todas las edades, tamaños y experiencias. Si
              alguna vez quisiste surfear o ya tienes las habilidades pero
              necesitas una tabla o algunos consejos adicionales, ¡estamos
              listos para comenzar! Si el oleaje está alto, ¡comienza el juego!
            </p>
            <Link to="/turno">
              <button type="button" className="btn btn-secondary">
                Saca tu Turno
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
