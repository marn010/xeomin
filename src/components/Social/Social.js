import React, { Component } from 'react';

import './Social.css'

export default class Social extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="row col-12 justify-content-center">
               <div className="col-10 SocialBox">
                  <div className="row justify-content-center">
                     <div className="col-2 VisitBox font40">
                        <p>VISITE</p>
                     </div>
                     <div className="col-4 font24">
                        <a href="www.instagram.com" target="blank">
                           <img className="InstaBlack" src="/assets/img/Pics/InstaBlack.png" alt="instagram" />
                           <span>@merzaesthetics_col</span>
                        </a>
                     </div>
                     <div className="col-4 font24">
                        <a href="www.merz.com/co" target="blank">
                           <img className="WebBlack" src="/assets/img/Pics/WebBlack.png" alt="Web" />
                           <span>www.merz.com/co</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}