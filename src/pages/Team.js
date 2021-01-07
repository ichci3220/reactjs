/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../components/images/silderimg1.jpg'
import Carousel from 'react-bootstrap/Carousel'
import logo from '../components/images/img1.jpg'
import Shaun from '../components/images/Shaun.jpeg'
import "./Team.css"
import Directory from '../components/images/Directory.png'


function Teams() {
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
       <div className="wrapper">
           <h1>Our Board 2020/2021
               
           </h1>
           <div className="our_team">
               <div className="team_member">
                   <div className="member_img">
                       <img src={Shaun}/>
                   </div>
                   <h3>Shaun Mathaiz</h3>
                   <span>President</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Micaiah De Silva</h3>
                   <span>Vice President</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Shanel Palliyaguruge</h3>
                   <span>Sergent At Arms</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Tasneem Rafee</h3>
                   <span>Secretary</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Jayith Gunasekara</h3>
                   <span>Asst. Secretary</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Dhinali Dhabare</h3>
                   <span>Tresurer</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Keshan Dassanayaka</h3>
                   <span>Asst. Tresurer</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Tharindi Wijesooriya</h3>
                   <span>Editor</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Kulindu Kodithuwakku</h3>
                   <span>Director Finance</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Aveesha Bandara</h3>
                   <span>Director Public Relations</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Shahini Lakpathirana</h3>
                   <span>Directress Personal Development</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Kellen Ranathunga</h3>
                   <span>Director International Understanding</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Nethmi Botheju</h3>
                   <span>Directress Community Service</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Aayuka Panditharathna</h3>
                   <span>Director Green Life</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Shannon Perera</h3>
                   <span>Director Club service</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Mrs.Piyumi Munasingha</h3>
                   <span>Staff Advisor</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Mrs.Asanka Narangoda</h3>
                   <span>Staff Advisor</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
               <div className="team_member">
                   <div className="member_img">
                       <img src={logo}/>
                   </div>
                   <h3>Mrs.Ishara Dassanayaka</h3>
                   <span>Staff Advisor</span>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                   
               </div>
           </div>
       </div>
       <div className="directory">
           <h4>Directory of Board Members 2020/2021</h4>
           <img src={Directory}/>
       </div>
       
       
        </>
    )
}

export default Teams;