import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './Home.css';

export default class Home extends Component{
   render(){
      return(
         <React.Fragment>
            <Header/>
            <div className="HomeMainWebBox">
               <div className="KnowMoreXeo font40">
                  <img className="XeominHomeTitlePic" src="/assets/img/Pics/Xeomin.png" alt="" />
               </div>
               <div className="BotonsBox justify-content-center font24">
                  <div className="InfoXeoBox">
                     <Link to="/xeomin" target="_top">
                        <img className="InfoXeo" src="/assets/img/Pics/BotonXeo.png" alt="Xeomin" />
                     </Link>
                  </div>
                  <div className="CampaingnGlobalBox">
                     <Link to="/campaign" target="_top">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/BotonGP.png" alt="Campaign" />
                     </Link>
                  </div>
               </div>
            </div>
            <div className="HomeMainWMovBox">

            </div>
            <Footer/>
         </React.Fragment>
      );
   }
}
