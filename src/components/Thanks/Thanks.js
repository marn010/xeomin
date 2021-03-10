import React, { Component } from 'react';

import './Thanks.css'

export default class Thanks extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="ThanksMainBox">
               <div className="ThanksWebBox">
                  <div className="container col-12">
                     <div className="row ThanksText">
                        <div className="col-6">
                           <p className="Raleway font32">
                              <b className="RalewayBold">¡MUCHAS GRACIAS</b> POR ACEPTAR VIVIR UNA EXPERIENCIA ÚNICA!
                           </p>
                        </div>
                        <div className="col-6">
                           <p className="Raleway font21">
                              Próximamente recibirá una <b className="RalewayBold"> muestra de Xeomin&#174;</b> y conocerá de otros beneficios adicionales que podrá tener por formar parte de esta <span className="exp"> experiencia única </span>
                           </p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-4">
                           <img src="" alt="logo"/>
                        </div>
                        <div className="col-4">
                           <img src="" alt="insta" />
                           <p>
                              @merzaesthetics_col
                           </p>
                        </div>
                        <div className="col-4">
                           <img src="" alt="web" />
                           <p>
                              www.merz.com/co
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="ThanksMovBox">

               </div>
            </div>
         </React.Fragment>
      );
   }
}