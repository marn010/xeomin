import React, { Component } from 'react';
import Xeomin from './Xeomin/Xeomin';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Main extends Component{
   render(){
      return(
         <React.Fragment>
            <Xeomin/>
         </React.Fragment>
      );
   }
}