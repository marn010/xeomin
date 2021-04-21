import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Animate, AnimateGroup } from 'react-simple-animate';
import './Home.css';

export default class Home extends Component{
   render(){
      return(
         <React.Fragment>
            <Header/>
            <AnimateGroup play>
            <div className="HomeMainWebBox">
               <div className="KnowMoreXeo font40">
               <Animate 
                  start={{
                     opacity:"0.02",
                     transform:"translateY(-200px)"
                  }}
                  end={{
                     opacity:"1.0",
                     transform:"translateY(0px)"
                  }}
                  duration={1.5}
                  delay={1}
                  sequenceIndex={0}
               >
                  <img className="XeominHomeTitlePic" src="/assets/img/Pics/Xeomin.png" alt="" />
               </Animate>
               </div>
               <div className="BotonsBox justify-content-center font24">
                  <div className="InfoXeoBox">
                     <Link to="/xeomin" target="_top" rel="noreferrer">
                        <img className="InfoXeo" src="/assets/img/Pics/BotonXeo.png" alt="Xeomin" />
                     </Link>
                  </div>
                  <div className="CampaingnGlobalBox">
                     <Link to="/campaign" target="_top" rel="noreferrer">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/BotonGP.png" alt="Campaign" />
                     </Link>
                  </div>
               </div>
            </div>
            <div className="HomeMainWMovBox">
               <div className="KnowMoreXeo font40">
                  <img className="XeominHomeTitlePic" src="/assets/img/Pics/XeominMov.png" alt="" />
               </div>
               <div className="BotonsBox justify-content-center font24">
                  <div className="InfoXeoBox">
                     <Link to="/xeomin" target="_top" rel="noreferrer">
                        <img className="InfoXeo" src="/assets/img/Pics/BotonXeo.png" alt="Xeomin" />
                     </Link>
                  </div>
                  <div className="CampaingnGlobalBox">
                     <Link to="/campaign" target="_top" rel="noreferrer">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/BotonGP.png" alt="Campaign" />
                     </Link>
                  </div>
               </div>
            </div>
            </AnimateGroup>
            <Footer/>
         </React.Fragment>
      );
   }
}
