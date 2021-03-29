import React, { Component } from 'react';

import './Header.css'

export default class Header extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="MainHeaderBox">
               <img className="HeaderPic" src="/assets/img/Pics/Header.png" alt="" />
               <div className="TestimonyVid">
                  <div className="row">
                     <div className="col-6 Raleway font32">
                        <p className="TestimonyText">
                           <b className="Raleway ">
                              Testimonio personal 
                           </b> de Carolina Aristizábal
                        </p>
                     </div>
                     <div className="col-6">
                        <img src="" alt="Video" />
                     </div>
                  </div>
               </div>
               
            </div>
         </React.Fragment>
      );
   }
}