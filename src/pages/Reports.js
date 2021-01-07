import React from 'react'
import "./Report.css"
import Carousel from 'react-bootstrap/Carousel'
import banner from '../components/images/silderimg1.jpg'
function Reports() {
    return (
        <>
             <Carousel>
  <Carousel.Item>
    <img
      className="w-100"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption>      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src={banner}
      alt="Third slide"
    />

    <Carousel.Caption>      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src={banner}
      alt="Third slide"
    />

    <Carousel.Caption>   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
<div className="TresurerReport">
    <h3>Tresurer Report 2019/2020</h3>
</div>
        </>
    )
}

export default  Reports;