import React from 'react'

const CarouselClass = () => {
  return (
    <div class="container py-2">
    <div class="row justify-content-center">
    <div class="col-lg-6">
    <h3 class="text-center py-5">CLASES INDIVIDUALES Y GRUPALES</h3>
    <div
      id="carouselExampleIndicator"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={
              "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708180631/MazunteSurf/l1-2_1_mczn9a.jpg"
            }
            class="d-block w-100 rounded-3 "
            alt=""
          />
        </div>
        <div class="carousel-item ">
          <img
            src={
              "https://res.cloudinary.com/dtsltqjuw/image/upload/v1708180631/MazunteSurf/how-to-become-a-surf-instructor-course-coach-surfing-jobs_1_bxrhmf.jpg"
            }
            class="d-block w-100 rounded-3"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicator"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicator"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  </div>
  </div> 
  )
}

export default CarouselClass