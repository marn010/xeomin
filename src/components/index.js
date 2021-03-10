import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Xeomin from './Xeomin/Xeomin';
import Footer from './Footer/Footer';
import Exclusive from './Exclusive/Exclusive';
import Home from './Home/Home';

import Campaign from './Campaign/Campaign';

export default class Main extends Component{
   render(){
      return(
         <Router>
            <Switch>
               <Route path="/campaign" component={Campaign}></Route>
               <Route path="/xeomin" component={Xeomin}></Route>
               <Route path="/home" component={Home}></Route>
               <Redirect to="/home"></Redirect>
            </Switch>
            <Footer/>
            {/* <Exclusive/> */}
         </Router>
      );
   }
}