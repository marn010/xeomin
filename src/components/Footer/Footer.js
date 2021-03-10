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
                     <div className="row justify-content-center Raleway">
                        <div className="col-5">
                           <p>Si está interesado en vivir una experiencia tan única como sus pacientes,<b className="RalewayBold">diligencie sus datos para recibir una muiestra de producto</b></p>
                        </div>
                        <div className="col-5">
                           <Forms/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="MainMovBox">
                  <div className="container col-11 offset-1">
                     <div className="col-12 justify-content-center Raleway">
                        <div className="col-11">
                           <p>Si está interesado en vivir una experiencia tan única como sus pacientes,<b className="RalewayBold">diligencie sus datos para recibir una muiestra de producto</b></p>
                        </div>
                        <div className="col-11">
                           <Forms/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="MERZBox">
                  <div className="row col-12 justify-content-end">
                     <img className="PaintPic" src="/assets/img/Pics/PaintColors.png" alt="PaintPic" />
                     <div className="col-2 align-self-center MerzSubtitle">
                        <p className="">
                           confidence to be
                        </p>
                     </div>
                     <div className="col-3 align-self-center" style={{paddingLeft:"0.5%"}}>
                        <p className="MerzTitle">
                           MERZ AESTHETICS&#174;
                        </p>
                     </div>
                  </div>
               </div>
               <div className="RegInvima container Raleway">
                  <div className="row justify-content-center">
                     <p>
                        Registro sanitario INVIMA
                     </p>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}