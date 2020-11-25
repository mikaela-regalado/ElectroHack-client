import React from "react";
import image from "../../img/ultima.jpg";
import image1 from "../../img/carouselnuevo.jpg";
import image2 from "../../img/carusel4.jpg";
import { Link } from "react-router-dom";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>

          {/*  <h3 id="firsttitleCarousel">¡Amodados a tus necesidades!</h3>
          <p className="textCarousel">Envios sin cargo a todos el pais</p> */}

          <h3 id="firsttitleCarousel">¡Acomodados a tus necesidades!</h3>
          <p className="textCarousel">Envios sin cargo a todos el pais</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Third slide" />

        <Carousel.Caption>
          {/*   <h3 className="titleCarousel">Expertos en date lo mejor</h3>
          <p className="textCarousel">
            Conoce lo último en tecnoloía a tu alcance
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Third slide" />

        <Carousel.Caption>
          {/*  <h3 className="titleCarousel">Lavar y secar nunca fue tan fácil</h3>
          <p className="textCarousel">
            Las mejores opciones para tus necesidades
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
