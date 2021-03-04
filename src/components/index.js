import React, { Component } from 'react';
import Xeomin from './Xeomin/Xeomin';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import Exclusive from './Exclusive/Exclusive';

export default class Main extends Component{
   render(){
      return(
         <React.Fragment>
            <Xeomin/>
            <Footer/>
            <Exclusive/>
         </React.Fragment>
      );
   }
}