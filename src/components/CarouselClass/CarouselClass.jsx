import React from "react";
import { Link } from "react-router-dom";

const CarouselClass = () => {
  return (
    <div className="container py-2">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3 className="text-center py-2">CLASES INDIVIDUALES Y GRUPALES</h3>
          <div
            id="carouselExampleIndicator"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={
                    "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708180631/MazunteSurf/l1-2_1_mczn9a.jpg"
                  }
                  className="d-block w-100 rounded-3 "
                  alt=""
                />
              </div>
              <div className="carousel-item ">
                <img
                  src={
                    "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708180631/MazunteSurf/how-to-become-a-surf-instructor-course-coach-surfing-jobs_1_bxrhmf.jpg"
                  }
                  className="d-block w-100 rounded-3"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicator"
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
              data-bs-target="#carouselExampleIndicator"
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

export default CarouselClass;
