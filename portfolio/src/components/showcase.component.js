import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import vid1 from "../images/background-vid-1.mp4";
import "../stylesheets/showcase.component.css" 

 
export default class Showcase extends Component{
    render(){
      return (
        <div className="video-size video-grid">
            <video autoPlay muted loop>
            <source src={vid1} type="video/mp4" />
            </video>
            {/* <div className="box"></div> */}
            <div className="text-container">
            <h1>Welcome to my portfolio</h1>
            <h2>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h2>
            <button className="button-1"><span>View</span></button>
            </div>
        </div>
    )
    }
}

