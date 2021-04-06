import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                     <div className="row justify-content-center Raleway font24">
                        <div className="col-5">
                           <img className="pencilPic" src="/assets/img/Pics/pencil.png" alt="pencil" />
                           <p className="pencilText">Si está interesado en vivir una experiencia tan única como sus pacientes, <b className="RalewayBold"> diligencie sus datos para recibir una muestra de producto</b></p>
                        </div>
                        <div className="col-5 font18">
                           <Forms/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="MainMovBox">
                  <div className="container col-11 offset-1">
                     <div className="col-12 justify-content-center Raleway">
                        <div className="col-11">
                           <img className="pencilPic" src="/assets/img/Pics/pencil.png" alt="pencil" />
                           <p className="pencilText">Si está interesado en vivir una experiencia tan única como sus pacientes, <b className="RalewayBold"> diligencie sus datos para recibir una muestra de producto</b></p>
                        </div>
                        <div className="col-11">
                           <Forms/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="RegInvima container Raleway font18">
                  <div className="row col-12 justify-content-center">
                     <Link to="/invima">
                        <p>
                           Registro sanitario INVIMA
                        </p>
                     </Link>
                  </div>
               </div>
               <div className="MERZBox">
                  <img className="EndForm" src="/assets/img/Pics/EndForm.png" alt="" />
               </div>
            </div>
         </React.Fragment>
      );
   }
}