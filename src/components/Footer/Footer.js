import React, { Component } from 'react';
import Forms from '../Form/Form';
import Social from '../Social/Social';

import './Footer.css'

export default class Footer extends Component{
   render(){
      return(
         <React.Fragment>
            <Social/>
            <div className="MainBox">
               <div className="MainWebBox container">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-5">
                           <p>Si está interesado en vivir una experiencia tan única como sus pacientes,<b>diligencie sus datos para recibir una muiestra de producto</b></p>
                        </div>
                        <div className="col-5">
                           <Forms/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="MERZBox">
                  <div className="row justify-content-end">
                     <img className="PaintPic" src="/assets/img/Pics/PaintColors.png" alt="PaintPic" />
                     <div className="col-1 align-self-center MerzSubtitle">
                        <p className="">
                           confidence to be
                        </p>
                     </div>
                     <div className="col-2" style={{paddingLeft:"0.5%"}}>
                        <p className="MerzTitle">
                           MERZ AESTHETICS&#174;
                        </p>
                     </div>
                  </div>
               </div>
               <div className="MainMovBox">
               </div>
            </div>
         </React.Fragment>
      );
   }
}