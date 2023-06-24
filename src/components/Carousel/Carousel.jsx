import React from "react"
import main1 from "../images/main1.jpg"
import main2 from "../images/main2.jpg"
import main3 from "../images/main3.jpg"
import main4 from "../images/main4.jpg"
import main5 from "../images/main5.jpg"

const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-interval="5000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={main1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={main2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={main3} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={main4} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={main5} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
