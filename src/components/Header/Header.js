import React, { Component } from 'react';

import './Header.css'

export default class Header extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="MainHeaderBox">
               {/* <img className="HeaderPic" src="/assets/img/Pics/Header.png" 
               alt="" /> */}
               <img className="HeaderPic" src="/assets/img/Pics/Header.png" 
               alt="" />
               <img className="HeaderMovPic" src="/assets/img/Pics/HeaderMov.png" alt="" />
               <div className="TestimonyVid Raleway font32">
                     <div className="TestimonyTextBox">
                        <p className="TestimonyText">
                           <b className="Raleway ">
                              Testimonio personal </b> 
                            de Carolina Aristizábal
                        </p>
                     </div>
                     <div className="TestimonyVideoBox">
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/529064794" className="VidCarolina " /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                     </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}