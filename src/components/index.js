import React, { Component } from 'react';
import Xeomin from './Xeomin/Xeomin';
import Footer from './Footer/Footer';
import Exclusive from './Exclusive/Exclusive';
import Home from './Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Campaign from './Campaign/Campaign';

export default class Main extends Component{
   render(){
      return(
         <React.Fragment>
            {/* <Home/> */}
            <Campaign/>
            {/* <Xeomin/> */}
            <Footer/>
            <Exclusive/>
         </React.Fragment>
      );
   }
}