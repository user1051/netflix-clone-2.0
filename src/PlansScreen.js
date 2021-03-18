import { Button } from '@material-ui/core'
import React from 'react'
import './PlansScreen.css'

function PlansScreen() {
    return (
        <div className="plansScreen">
            <p>Renewal date 15/02/22</p>
           <div className="plansScreen__plan">
               <div className="planScreen__info">
                   <h4>Basic</h4>
                   <h6>720p</h6>
               </div>
               <Button variant="outlined">Subscribe</Button>
           </div>
            <div className="plansScreen__plan">
               <div className="planScreen__info">
                   <h4>Standard</h4>
                   <h6>1080p</h6>
               </div>
               <Button variant="outlined">Subscribe</Button>
           </div>
            <div className="plansScreen__plan">
               <div className="planScreen__info">
                   <h4>Premium</h4>
                   <h6>4k + HDR</h6>
               </div>
               <Button variant="outlined" className="plansScreen__subscribed">Current Package</Button>
           </div>
        </div>
    )
}

export default PlansScreen
