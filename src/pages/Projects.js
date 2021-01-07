/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../components/images/silderimg1.jpg'
import './Project.css'
import Logo from '../components/images/img1.jpg'

function Projects() {
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
   <div className="container-1">
       <div className="box-1">
           <div className="icon">
               <img src={Logo}/>
           </div>
           <div className="content">
           <h3> Community Service</h3>
              <p>This section includes all the Community Service
                  Projects done by the Interact Club of Horizon College 
                  International
              </p>
              <a href="#">Projects</a>
           </div>
       </div>
       <div className="box-1">
           <div className="icon">
               <img src={Logo}/>
           </div>
           <div className="content">
           <h3>Finance</h3>
              <p>This section includes all the Finance
                  Projects done by the Interact Club of Horizon College 
                  International</p>
              <a href="#">Projects</a>
           </div>
       </div>
       <div className="box-1">
           <div className="icon">
               <img src={Logo}/>
           </div>
           <div className="content">
           <h3>Personal Development</h3>
              <p>This section includes all the Personal Development
                  Projects done by the Interact Club of Horizon College 
                  International</p>
              <a href="#">Projects</a>
           </div>
       </div>       
       <div className="box-1">
           <div className="icon">
               <img src={Logo}/>
           </div>
           <div className="content">
           <h3>Club Service</h3>
              <p>This section includes all the Club Service
                  Projects done by the Interact Club of Horizon College 
                  International</p>
              <a href="#">Projects</a>
           </div>
       </div>
       <div className="box-1">
           <div className="icon">
               <img src={Logo}/>
           </div>
           <div className="content">
           <h3>International Understanding</h3>
              <p>This section includes all the International Understanding
                  Projects done by the Interact Club of Horizon College 
                  International</p>
              <a href="#">Projects</a>
           </div>
       </div>
       <div className="box-1">
           <div className="icon">
               <img src={Logo}/>
           </div>
           <div className="content">
           <h3> Public Relations</h3>
              <p>This section includes all the Public Relation
                  Projects done by the Interact Club of Horizon College 
                  International</p>
              <a href="#">Projects</a>
           </div>
       </div>
       <div className="box-1">
           <div className="icon">
               <img src={Logo}/>
           </div>
           <div className="content">
           <h3>Green Life</h3>
              <p>This section includes all the Green Life
                  Projects done by the Interact Club of Horizon College 
                  International</p>
              <a href="#">Projects</a>
           </div>
       </div>  
   </div>
   <div className="upcoming">
       <h3>Upcoming Events</h3>
       <div className="container3">
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>ICHCI Web</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

           </div>
       </div>
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>ICHCI Web</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

           </div>
       </div>
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>ICHCI Web</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

           </div>
       </div>
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>ICHCI Web</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

           </div>
       </div>
      </div>
   </div>
</>
    )
}

export default Projects;