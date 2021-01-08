import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../components/images/silderimg1.jpg'


function Slider() {
    return (
        <div>
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
        </div>
    )
}

export default Slider
