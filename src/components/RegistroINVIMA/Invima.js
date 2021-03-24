import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Invima.css';

export default class Invima extends Component{
   render(){
      return(
         <React.Fragment>
            <img className="LogoHeadINVIMA" src="/assets/img/Pics/LogoHeadINVIMA.png" alt="" />
            <p className="RegText XeominBlue font32 RalewayBold">
               Registro sanitario INVIMA
            </p>
            <img className="RegINVIMA" src="/assets/img/Pics/INVIMA.png" alt="Registro Invima" />
            <div className="BackBTN font24">
               <Link className="BackBTNLink" to="/home">
                  Regresar
               </Link>
               {/* <a href="/home">
                  Regresar
               </a> */}
            </div>
         </React.Fragment>
      );
   }
}