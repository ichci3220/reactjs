import React from 'react'
import Slider from '../components/Slider'

function Club() {
    return (
        <div>
            <Slider/>
            <h4>Our Club Service Projects</h4>
     <div className="container3">
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">30th December 2020</span>
               <h2>ICHCI Installation</h2>
               <p>We successfully held our 7th Installation appointing the new board
members who will lead ICHCI into the future</p>

           </div>
       </div>
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>Mathru Upakara</h2>
               <p>Participated in the Interact Week Celebrations Bidding 2020, at PATHE Global Campus, and
presented Project Mathru Upakara under the Rotary AOF Maternal and Child Health, along
with the Interact Clubs of Sujatha Vidyalaya, Hindu College Colombo and Ave Maria Convent
Negombo. We won the bid and successfully completed the  project </p>

           </div>
       </div>
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>Evolving Mindsets</h2>
               <p>Webinars were conducted on topics such as: anxiety, depression and
stress intending to radiate mental positivity amongst the youth of Sri Lanka, as well as around
the globe with the participation of Interactors from the Philippines and Brazil as well.
</p>

           </div>
       </div>
       
       
      </div>
        </div>
    )
}

export default Club
