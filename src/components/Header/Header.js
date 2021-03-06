import React,{useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom"

import SliderNav from "../SliderNav/SliderNav"


export default function Header(props) {

    
const [name,setName]= useState("Hi stranger")


useEffect(()=>{
let val=props.auth.currentUser.displayName;
    if(val!==null && val!==undefined){
       setName(val.split(" ")[0]);
    }
},[])

    

    return (
        <header>
            <nav className="nav-style">
        <div className="maindiv">

        <div className="unsplash-icon-div">
            <svg className="top-svg">
            <path d={`M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z`}></path>
        </svg>
        </div>

        <div className="form-div">
            <form action="" >
                <input className="form-div-input" type="text" name="" id="" placeholder="Search free high-resolution photos"
                />
            </form>
        </div>
        </div>
        <div class="side-div">
            <span class="side-div-span">Home</span>
            <div className="right-side-div-text">Brands 
                <span className="right-side-div-text-lifted">New</span>
            </div>
           
              <Link to="/NotAvailable">
              <Button variant="light" className="mr-class btnclass btnclass1"><span>{props.name|| `${name}`}</span></Button>
              </Link>
              <Button variant="danger" className="mr-class btnclass"
              onClick={()=>{
props.auth.signOut();
props.func((item)=>!item)
              }}
              ><span>
Logout</span>
              </Button>
        </div>
            </nav>
            <SliderNav/>
        </header>
    )
}
