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
                     <img className="X" src="/assets/img/Background/X.svg" alt="X" />
                     <div className="row justify-content-center Raleway font24">
                        <div className="col-6">
                           <img className="pencilPic" src="/assets/img/Pics/pencil.svg" alt="pencil" />
                           <p className="pencilText">Si está interesado en que sus pacientes vivan una experiencia como la de Carolina, <b className="RalewayBold"> diligencie el siguiente formulario </b>para recibir una muestra de producto. </p>
                        </div>
                        <div className="col-6 font18">
                           <Forms/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="MainMovBox">
                  <div className="container col-12 ">
                     <div className="col-12 justify-content-center Raleway">
                        <div className="col-12">
                           <img className="pencilPic" src="/assets/img/Pics/pencil.svg" alt="pencil" />
                           <p className="pencilText">Si está interesado en que sus pacientes vivan una experiencia como la de Carolina, <b className="RalewayBold"> diligencie el siguiente formulario </b> para recibir una muestra de producto.</p>
                        </div>
                        <div className="col-12">
                           <Forms/>
                        </div>
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
                  <p>Merz Colombia S.A.S. Carrera 11 No. 87-51 Oficina. 302 - Teléfono: +57 1 3904707<br/>
                  <span>
                     Email: servicioalcliente@merz.com - Bogotá Colombia
                     </span>
                  </p>
               </div>
         </React.Fragment>
      );
   }
}