/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"


function Navbar(){


  return(
   <div>
      <ul  id="nav">
              <li ><a id="YOLO" href="#">YOLO</a></li>
              <li ><a className="navitem" href="#">Explore</a></li>
              <li ><a className="navitem" href="#">Story</a></li>
              <li ><a className="navitem" href="#">Host An Experience</a></li>
              <li ><a className="navitem" href="#">Contact</a></li>
      </ul>
  </div>
  );
}

export default Navbar
