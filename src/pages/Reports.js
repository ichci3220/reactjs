/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Report.css"
import Slider from '../components/Slider'
import Report from '../components/images/Tresurerreport.JPG'

function Reports() {
    return (
        <>
             <Slider/>
<div className="TresurerReport">
    <h3>Tresurer Report 2020/2021</h3>
    <div classname="report">
        <img src={Report}/>
    </div>
    
</div>
        </>
    )
}

export default  Reports;