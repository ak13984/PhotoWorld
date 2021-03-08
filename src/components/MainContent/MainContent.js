import React from 'react'
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

export default function MainContent() {
    return (


<div className="main">
<div className="sub-main">
    <div className="left">
<h1 className="left-heading">Nature</h1>
<h3 className="left-text">Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between.
</h3>
    </div>

<div className="right" >

<div className="right-div" >    
<ul className="right-top" >
    <li className="right-text-list"> 
        <div className="right-text-list-div" >
        <p>Status</p>
        <Link to="/NotAvailable">
            <Button variant="success">Open</Button>
        </Link>
        </div>
    </li>
    <li className="right-text-list">
        <div className="right-text-list-div" >
        <p>Curator</p>
        <div className="unsplash-icon-div">
            <svg  className="mainsvg">
            <path d={`M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z`}></path>
            </svg>
        </div>

        </div>
    </li>
    <li className="right-text-list">
        <div className="right-text-list-div" >
           <p>Contributions</p>
           <span style={{fontWeight:'bolder'}}>8.2K</span> 
        </div>    
    </li>
</ul>
</div>

<Link to="/NotAvailable" style={{textDecoration:'none'}}>
<button className="right-side-btn" type="submit"><span>Submit to  <span style={{fontWeight:'bolder'}}>Nature</span></span></button>
</Link>
    
</div>

</div>
</div>

    )
}
