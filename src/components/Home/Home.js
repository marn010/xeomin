import React, { Component } from 'react';
import Header from '../Header/Header';

import './Home.css';

export default class Home extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="HomeMainWebBox">
               <Header/>
               <div className="KnowMoreXeo font40">
                  <p>
                     Conozca más de
                     <img className="XeominHomeTitlePic" src="/assets/img/Pics/Xeomin.png" alt="" />
                  </p>
               </div>
               <div className="row col-12 justify-content-center font24">
                  <div className="col-5">
                     <a href="/xeomin">
                        <img className="InfoXeo" src="/assets/img/Pics/InfoXeomin.png" alt="Xeomin" />
                     </a>
                     <p>
                        Conozca más de Xeomin
                     </p>
                  </div>
                  <div className="col-5">
                     <a href="/campaign">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/1.jpg" alt="Campaign" />
                     </a>
                     <p>
                        Campaña global
                     </p>
                  </div>
               </div>
            </div>
            <div className="HomeMainWMovBox">

            </div>
         </React.Fragment>
      );
   }
}
