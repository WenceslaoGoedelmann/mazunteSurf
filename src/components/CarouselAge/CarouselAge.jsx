import React from "react";
import { Link } from "react-router-dom";

const CarouselAge = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3 className="text-center py-2">TODAS LAS EDADES</h3>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={
                    "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708179179/MazunteSurf/surfing-1990339_1280_1_c3tgi5.jpg"
                  }
                  className="d-block w-100 rounded-3 "
                  alt=""
                />
              </div>
              <div className="carousel-item ">
                <img
                  src={
                    "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708091116/MazunteSurf/360_F_626686750_cjcVejjzWe5jcrcA8QT7UFbcflnxV0gY_ne68nr.jpg"
                  }
                  className="d-block w-100 rounded-3"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="text-center py-2" >
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

export default CarouselAge;
