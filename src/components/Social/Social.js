import React, { Component } from 'react';

import './Social.css'

export default class Social extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="row col-12 justify-content-center" style={{margin:"0%"}}>
               <div className="SocialBox">
                  <div className="row col-12 justify-content-center" style={{padding:"0% 0% 0% 0.5%"}}>
                     <div className=" VisitBox font40">
                        <p>VISITE</p>
                     </div>
                     <div className=" font24 instaBox">
                        <a href="https://www.instagram.com/?hl=es" target="blank">
                           <img className="InstaBlack" src="/assets/img/Pics/InstaBlack.png" alt="instagram" />
                           <span>@merzaesthetics_col</span>
                        </a>
                     </div>
                     <div className=" font24 WebBox">
                        <a href="https://merzaesthetics.com/" target="blank">
                           <img className="WebBlack" src="/assets/img/Pics/WebBlack.png" alt="Web" />
                           <span>merzaesthetics.com</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <p className="UniqueExp font32"> 
                  ¿ Y SUS PACIENTES HAN VIVIDO UNA EXPERIENCIA ÚNICA?
               </p>
            </div>
         </React.Fragment>
      );
   }
}