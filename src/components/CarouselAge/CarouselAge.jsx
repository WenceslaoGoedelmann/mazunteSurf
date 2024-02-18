import React from "react";

const CarouselAge = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
      <div class="col-lg-6">
      <h3 class="text-center py-5">TODAS LAS EDADES</h3>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={
                "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708179179/MazunteSurf/surfing-1990339_1280_1_c3tgi5.jpg"
              }
              class="d-block w-100 rounded-3 "
              alt=""
            />
          </div>
          <div class="carousel-item ">
            <img
              src={
                "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708091116/MazunteSurf/360_F_626686750_cjcVejjzWe5jcrcA8QT7UFbcflnxV0gY_ne68nr.jpg"
              }
              class="d-block w-100 rounded-3"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    </div> 
  );
};

export default CarouselAge;
