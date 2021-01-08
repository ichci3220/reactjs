import React from 'react'
import Slider from '../components/Slider'

function Green() {
    return (
        <div>
            <Slider/>
            <h4>Our Green Life Projects</h4>
     <div className="container3">
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>Green Con Bidding</h2>
               <p>We bid for the District Green Life Project and were placed third. We
will however, execute our plan in a smaller scale as a green life initiative</p>

           </div>
       </div>
       <div className="card">
           <div className="card-image"></div>
           <div className="card-text">
               <span class="date">20201/01/04</span>
               <h2>Meraki</h2>
               <p>Meraki is a DIY competition where the participants must create
something out of recycled material, in order to promote the recycling process and to
minimize the careless disposal of plastics and non-biodegradable matter</p>

           </div>
       </div>
       
      </div>
        </div>
    )
}

export default Green
