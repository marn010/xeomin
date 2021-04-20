import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Xeomin from './Xeomin/Xeomin';
import Exclusive from './Exclusive/Exclusive';
import Home from './Home/Home';
import Login from './Login/Login';
import useToken from './Hooks/useToken';

import Campaign from './Campaign/Campaign';
import Invima from './RegistroINVIMA/Invima';

export default function Main(){
   let { token, setToken } = useToken();
   if(!token) {
      return <Login setToken={setToken} />
   }
   return(
      <div>
         <Router>
            <Switch>
               <Route path="/campaign" component={Campaign}></Route>
               <Route path="/xeomin" component={Xeomin}></Route>
               <Route path="/home" component={Home}></Route>
               <Route path="/invima" component={Invima}></Route>
               <Redirect to="/home"></Redirect>
            </Switch>
         
         <Exclusive/>
         </Router>
      </div>
      
   );
}