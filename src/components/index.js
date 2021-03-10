import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Xeomin from './Xeomin/Xeomin';
import Footer from './Footer/Footer';
import Exclusive from './Exclusive/Exclusive';
import Home from './Home/Home';
import Login from './Login/Login';

import Campaign from './Campaign/Campaign';

export default function Main(){
   const [token, setToken] =useState();   
   if(!token) {
      return <Login setToken={setToken} />
   }
   return(
      <Router>
         <Switch>
            <Route path="/campaign" component={Campaign}></Route>
            <Route path="/xeomin" component={Xeomin}></Route>
            <Route path="/home" component={Home}></Route>
            <Redirect to="/home"></Redirect>
         </Switch>
         <Footer/>
         <Exclusive/>
      </Router>
   );
}