import React, { Component } from 'react';

import './Thanks.css'

export default class Thanks extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="ThanksMainBox">
               <div className="ThanksWebBox">
                  <div className="container col-12">
                     <div className="row ThanksText">
                        <div className="col-6">
                           <p className="Raleway font32">
                              <b className="RalewayBold">¡MUCHAS GRACIAS</b> POR ACEPTAR VIVIR UNA EXPERIENCIA ÚNICA!
                           </p>
                        </div>
                        <div className="col-6">
                           <p className="Raleway font21">
                              Próximamente recibirá una <b className="RalewayBold"> muestra de Xeomin&#174;</b> y conocerá de otros beneficios adicionales que podrá tener por formar parte de esta <span className="exp"> experiencia única </span>
                           </p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-4">
                           <img className="hashtag" src="/assets/img/Pics/Hashtag.png" alt="logo"/>
                        </div>
                        <div className="col-4 InstaBlueText">
                           <img className="InstaBlue" src="/assets/img/Pics/InstaBlue.png" alt="insta" />
                           <a href="https://www.instagram.com/?hl=es" target="_blank" rel="noreferrer">
                              @merzaesthetics_col
                           </a>
                        </div>
                        <div className="col-4 WebBlueText">
                           <img className="WebBlue" src="/assets/img/Pics/WebBlue.png" alt="web" />
                           <a href="https://merzaesthetics.com/" target="_blank" rel="noreferrer">
                              merzaesthetics.com
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="ThanksMovBox">
                  <div className="container col-12">
                     <div className="row ThanksText justify-content-center">
                        <div className="col-12">
                           <p className="Raleway font40">
                              <b className="RalewayBold">¡MUCHAS GRACIAS</b> POR ACEPTAR VIVIR UNA EXPERIENCIA ÚNICA!
                           </p>
                        </div>
                        <div className="col-12">
                           <p className="Raleway font32">
                              Próximamente recibirá una <b className="RalewayBold"> muestra de Xeomin&#174;</b> y conocerá de otros beneficios adicionales que podrá tener por formar parte de esta <span className=""> experiencia única </span>
                           </p>
                        </div>
                     </div>
                     <div className="col-12">
                        <img className="hashtag" src="/assets/img/pics/hashtag.png" alt="logo"/>
                     </div>
                     <div className="row justify-content-center">
                        <div className="col-6 InstaBlueText font24">
                           <img className="InstaBlue" src="/assets/img/Pics/InstaBlue.png" alt="insta" />
                           <a href="https://www.instagram.com/?hl=es" target="_blank" rel="noreferrer">
                              @merzaesthetics_col
                           </a>
                        </div>
                        <div className="col-6 WebBlueText font24">
                           <img className="WebBlue" src="/assets/img/Pics/WebBlue.png" alt="web" />
                           <a href="https://merzaesthetics.com/" target="_blank" rel="noreferrer">
                              merzaesthetics.com
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}