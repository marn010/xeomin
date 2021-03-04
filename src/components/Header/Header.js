import React, { Component } from 'react';

import './Header.css'

export default class Header extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="MainHeaderBox">
               <img className="HeaderPic" src="/assets/img/Pics/Header.png" alt="" />
               <div className="col-11 TestimonyVid">
                  <div className="row">
                     <div className="col-6">
                        <p>
                           <b>
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