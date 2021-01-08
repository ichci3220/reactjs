import React from 'react'
import Slider from '../components/Slider'
import './Financedept.css'

function Financedept() {
    return (
        <>
        <Slider/>
     <h4>Our Finance Projects</h4>
     <div className="container3">
       
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>Christmas Mug Sale</h2>
               <p>A Fundraising project was carried out for Christmas by selling mugs for
Christmas, each LKR 600 with customization for an additional LKR 100.</p>

           </div>
       </div>
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>ICHCI Web</h2>
               <p>A website was created so anyone can easily access us and to get a monthly turnover</p>

           </div>
       </div>      
      </div>
        </>
    )
}

export default Financedept
