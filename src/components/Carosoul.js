import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carosoul = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/1.jpg"
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption>
            <h5>
              "In every walk with nature one receives far more than he seeks."
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/2.jpg"
            alt="Second slide"
            height="600px"
          />
          <Carousel.Caption>
            <h5>
              Some old-fashioned things like fresh air and sunshine are hard to
              beat
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/3.jpg"
            alt="Third slide"
            height="600px"
          />
          <Carousel.Caption>
            <h5>Nature is pleased with simplicity.</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carosoul;
