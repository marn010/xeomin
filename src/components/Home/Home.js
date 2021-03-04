import React, { Component } from 'react';
import Header from '../Header/Header';

import './Home.css';

export default class Home extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="HomeMainWebBox">
               <Header/>
               <div className="KnowMoreXeo">
                  <p>
                     Conozca más de
                     <img className="XeominTitlePic" src="/assets/img/Pics/Xeomin.png" alt="" />
                  </p>
               </div>
               <div className="row col-12 justify-content-center">
                  <div className="col-5">
                     <a href="">
                        <img className="InfoXeo" src="/assets/img/Pics/InfoXeomin.png" alt="Xeomin" />
                     </a>
                     <p>
                        Conozca más de Xeomin
                     </p>
                  </div>
                  <div className="col-5">
                     <a href="">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/1.jpg" alt="Campaingn" />
                     </a>
                     <p>
                        Campaña global
                     </p>
                  </div>
               </div>
               <p>HomePage works!!</p>

            </div>
            <div className="HomeMainWMovBox">

            </div>
         </React.Fragment>
      );
   }
}
