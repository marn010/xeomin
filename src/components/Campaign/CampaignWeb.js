import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Campaign.css';

export default class CampaignWeb extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="CampaignMainBox CampaignWeb">
               <div className="CampaignHeader">
                  <img className="HeaderCampaingn" src="/assets/img/Pics/HeaderCampaingn.png" alt="HeaderCampaign" />
               </div>
               <div className="GoPure">
                  <div className="row justify-content-center InitialCampaingnBox">
                     <div className="col-4 XeominBlue InitialCampaingn
                     ">
                        <p className="RalewayBold font32"><b>GO PURE</b></p>
                        <p className="Raleway font32">Gwyneth Paltrow</p>
                     </div>
                     <div className="col-7 InitialCampaingnText Raleway font24">
                        <p>
                           Merz Aesthetics, la empresa más grande dedicada a la estética médica a nivel mundial ha anunciado una sociedad con Gwyneth Paltrow, actriz, autora y empresaria, ganadora de un Óscar y un premio Emmy, para el lanzamiento de la primera campaña mundial sobre belleza. Paltrow, la cara visible y global de Merz Aesthetics, apoya a las mujeres que eligen la bellleza en sus propios términos y lo hacen con productos de eficacia comprobada.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="GwynethBox container col-12">
                  <img className="GPBeauty" src="/assets/img/Pics/GPBeauty.png" alt="" />
               </div>
               <div className="GPText Raleway font24">
                  <p>
                     Paltrow es considerada ampliamente una autoridad en la belleza y el bienestar, por lo cual esta campaña se vincula a su filosofia sobre la belleza: las mujeres deben darse el permiso de hacer lo que quieran para sentirse bien.
                  </p>
                  <p>
                     Paltrow y personas influyentes de las redes sociuales incentivarán a a las mujeres a tomarse el tiempo para si mismas y priorizar el autocuidado, especialmente ahora. Paltrow compartirá detalles sobre lo que hace para verse y sentirse mejor, y pedirá a las mujeres que hagan lo mismo en las redes sociales usando el hastag <span> #GoPureStayReal.</span>
                  </p>
               </div>
               <div className="container col-11 VideoPure">
                  <div className="row justify-content-center VidPureWeb">
                     <div className="col-4 VideoTitle">
                        <p className="VideoPureText RalewayBold font40" >
                           <b>
                              Video GP - Puro y comprobado
                           </b>
                        </p>
                     </div>
                     <div className="col-6">
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/529064794" className="VidPure " /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                     </div>
                  </div>
               </div>
               <div className="MerzText">
                  <div className="row font24">
                     <div className="col-5 RalewayBold XeominBlue">
                        <p className="EmotionText">
                           "Es un momento muy emocionante para Merz Aesthetics", dijo Bob Rhatigan. Director Ejecutivo Global de Merz Aesthetics.
                        </p>
                     </div>
                     <div className="col-7 Raleway">
                        <p>
                           "La pasión de Gwyneth por le conocimiento y el parendizaje, su perspectiva profundamente personal sobre la belleza y el envejecimiento, y su estándar puro de belleza, son cualidades que admiramos en Merz Aesthetics y son los valores que compartimos como empresa"
                        </p>
                     </div>
                  </div>
               </div>
               <div className="container col-11 VideoPurify">
                  <div className="row justify-content-center rowPurify VidPurifyWeb" style={{padding:"0% 0%"}}>
                     <div className="col-4 VideoTitle">
                        <p className="VideoPurifyText RalewayBold font40">
                           <b>
                              Video GP - Me purifiqué
                           </b>
                        </p>
                     </div>
                     <div className="col-6">
                     <iframe title="vimeo-player" src="https://player.vimeo.com/video/529064724" className="VidPurify" /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                     </div>
                  </div>
                  <div className="row justify-content-center Raleway font24">
                     <div className="col-8" style={{padding:"2% 0%"}}>
                     <p>
                        Esta será la primera campaña global de marketing para Merz Aesthetics desde que la compañia anunció en noviembrte de 2019 que operaria de forma independiente como el mayor negocio dedicado a la estética médica a nivel mundial
                     </p>
                     </div>
                  </div>
               </div>               
               <div className="MERZBox2">
                  <img src="/assets/img/Pics/LogoMerz.png" alt="" />
               </div>
               <div className="container col-12">
                  <div className="row font24">
                     <div className="col-6 MerzAestheticsTextWBox Raleway ">
                        <p>
                           Merz Aesthetics es una compañia de estética médica con una larga historia de capacitación de profesionales de la salud, pacientes y empleados para vivir cada día basados en la confianza. Nuestro objetivo es ayudar a las personas de todo el mundo a verse, sentirse y vivir como las mejores versiones de sí mismos.
                        </p>
                        <p>
                           Probada clínicamente, nuestro portafolio de productos incluye inyectables, dispositivos y tratamientos para el cuidado de la piel diseñados para satisfacer las necesaidades de cada paciente con los más altos estándares de seguridad y eficacia.
                        </p>
                     </div>
                     <div className="col-6 MerzAestheticsTextBox Raleway">
                        <p>
                           Somos conocidos por construir relaciones únicas con clientes que se sienten como familia. Nuestra sede mundial se encuentra en Raleigh, Carolina del Norte, Estados Unidos, con oficinas en 32 países de todo el mundo. Merz Aesthetics es parte de Merz Group, una empresa familiar fundada en 1908 y con sede en Frankfurt, Alemania.
                        </p>
                        <p>
                           Para mayor información visita <a href="https://merzaesthetics.com/" target="blank">merzaesthetics.com</a>
                        </p>
                     </div>
                  </div>
               </div>
               <div className=""> 
                  <img className="GPAbout" src="/assets/img/Pics/GPAbout.png" alt="" />
               </div>
               <div className="row col-12 justify-content-center font24">
                  <div className="col-5">
                     <Link to="/xeomin" target="_top">
                        <img className="InfoXeo" src="/assets/img/Pics/InfoXeomin.png" alt="Xeomin" />
                     </Link>
                     <p className="XeominBlue">
                        Haga clic para conocer más de la ciencia detrás de Xeomin
                     </p>
                  </div>
                  <div className="col-5">
                     <Link to="/home" target="_top">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/HomeCampaing.png" alt="Campaign" />
                     </Link>
                     {/* <a href="/campaign">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/HomeCampaing.png" alt="Campaign" />
                     </a> */}
                     <p className="XeominBlue">
                        Haga clic para conocer la campaña con Carolina Aristizábal
                     </p>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}