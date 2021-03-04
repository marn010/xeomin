import React, { Component } from 'react';

import './Social.css'

export default class Social extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="row col-12 justify-content-center">
               <div className="col-10 SocialBox">
                  <div className="row justify-content-around">
                     <div className="col-2 VisitBox">
                        <p>VISITE</p>
                     </div>
                     <div className="col-3">
                        <a>
                           <img src="" alt="instagram" />
                           <span>@merzaesthetics_col</span>
                        </a>
                     </div>
                     <div className="col-3">
                        <a>
                           <img src="" alt="Web" />
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