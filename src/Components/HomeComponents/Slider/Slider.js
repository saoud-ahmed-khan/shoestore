import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'


export const Slider = () => {
  return (
    <div>
      <Carousel className="slider">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.edifia.fr/wp-content/uploads/formation-gestion-du-temps-1-768x512-1-1400x500-1.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.smartertravel.com/uploads/2019/12/shutterstock_1549887656-e1576874527872-1400x500.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.merge.co.ke/wp-content/uploads/2016/12/runner-1400x500.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  )
}
