import React, { Component } from 'react';

import './Exclusive.css'

export default class Exclusive extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="ExclusiveBox">
               <p className="ExclusiveText align-self-center Raleway font10">
                  Contenido exclusivo para cuerpo médico
               </p>
            </div>
         </React.Fragment>
      );
   }
}