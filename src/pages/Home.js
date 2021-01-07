/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../components/images/silderimg1.jpg'
import banner2 from '../components/images/sliderimg2.jpg'
import President from '../components/images/president.jpg'
import './Home.css'
import logo from '../components/images/img1.jpg'


function Home() {
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
      src={banner2}
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
<div className="Presidentmsg">    
    <div className="image">
        <img src={President}/>
    </div>
 <h2>Message from President</h2>
 <h3>Shaun Denver Mathaiz</h3>
 <div className="border"></div>
 <span/>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 </p>
 <div className="readmore">
   <button>Read More </button>
 </div>
</div>
   <div className="testimonials">
       <div className="inner">
           <h1>Testimonials</h1>
           <div className="border">               
           </div>
           <div className="row">
               <div className="col">
                   <div className="testimonial">
                       <img src={logo}/>
                       <div className="name">Full Name</div>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                       </p>
                   </div>
               </div>
               <div className="col">
                   <div className="testimonial">
                       <img src={logo}/>
                       <div className="name">Full Name</div>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                       </p>
                   </div>
               </div>
               <div className="col">
                   <div className="testimonial">
                       <img src={logo}/>
                       <div className="name">Full Name</div>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                       </p>
                   </div>
               </div>
               <div className="col">
                   <div className="testimonial">
                       <img src={logo}/>
                       <div className="name">Full Name</div>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                       </p>
                   </div>
               </div>
               <div className="col">
                   <div className="testimonial">
                       <img src={logo}/>
                       <div className="name">Full Name</div>
                       <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   
                       </p>
                   </div>
               </div>
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
     
</div>                

   
 );
}


export default Home ;
