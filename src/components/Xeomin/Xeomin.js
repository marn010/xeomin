import React, { Component } from 'react';

import './Xeomin.css';
import XeominMov from './XeominMov';
import XeominWeb from './XeominWeb';

export default class Xeomin extends Component{
   render(){
      return(
         <div className="XeominMainBox" id="Xeomin">
            <XeominWeb/>
            <XeominMov/>
         </div>
      );
   }
}