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
                     <div className="col-12 InitialCampaingnText Raleway font24">
                        <p>
                           Merz Aesthetics, la empresa más grande dedicada a la estética médica a nivel mundial ha anunciado una sociedad con <b>Gwyneth Paltrow</b>, actriz, autora y empresaria, ganadora de un Óscar y un premio Emmy, para el lanzamiento de la primera campaña mundial sobre belleza.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="GwynethBox">
                  <img className="GPBeauty" src="/assets/img/Pics/GPBeauty.png" alt="" />
               </div>
               <div className="GPText Raleway font24">
                  <p>
                     Durante esta campaña incentivará a las mujeres a tomarse el tiempo para sí mismas y priorizar el autocuidado, especialmente ahora; compartirá detalles sobre lo que hace para <span className="XeominBlue"><b>verse y sentirse mejor, </b></span> y pedirá a las mujeres que hagan lo mismo en las redes sociales usando el hashtag <span className="XeominBlue"><b> #GoPureStayReal.</b></span>
                  </p>
               </div>
               <div className="container col-11 VideoPure">
                  <div className="row justify-content-center VidPureWeb">
                     <div className="col-4 VideoTitle">
                        <p className="VideoPureText RalewayBold font40" >
                           <b>
                              "Ayudar a las mujeres a encontrar productos puros hace parte de mi rutina"
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
                     <div className="col-5 RalewayBold ">
                        <p className="EmotionText">
                           <b className="XeominBlue">Paltrow</b> es considerada ampliamente una <b className="XeominBlue"> autoridad en la belleza y el bienestar,</b> por lo cual esta campaña se vincula a su filosofía sobre la belleza: <b className="XeominBlue">"las mujeres deben darse el permiso de hacer lo que quieran para sentirse bien".</b>
                        </p>
                     </div>
                     <div className="col-7 Raleway">
                        <p>
                           "La pasión de Gwyneth por le conocimiento y el aprendizaje, su perspectiva profundamente personal sobre la belleza y el envejecimiento, y su estándar puro de belleza, son cualidades que admiramos en Merz Aesthetics y son los valores que compartimos como empresa"<b className="XeominBlue">dijo Bob Rhatigan. Director Ejecutivo Global de Merz Aesthetics.</b>
                        </p>
                     </div>
                  </div>
               </div>
               <div className="container col-11 VideoPurify">
                  <div className="row justify-content-center rowPurify VidPurifyWeb" style={{padding:"0% 0%"}}>
                     <div className="col-4 VideoTitle">
                        <p className="VideoPurifyText RalewayBold font40">
                           <b>
                              "¿Están listos para la pureza?"
                           </b>
                        </p>
                     </div>
                     <div className="col-6">
                     <iframe title="vimeo-player" src="https://player.vimeo.com/video/529064724" className="VidPurify" /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                     </div>
                  </div>
               </div>               
               <div className="row justify-content-center Raleway font24 XeominBlue">
                  <div className="col-8" style={{padding:"2% 0%"}}>
                  <p>
                     Esta será la primera <b>campaña global de marketing para Merz Aesthetics</b> desde que la compañia anunció en noviembre de 2019 que operaria de forma independiente como el mayor negocio dedicado a la estética médica a nivel mundial
                  </p>
                  </div>
               </div>
               <div className="MERZBox2">
                  <img src="/assets/img/Pics/LogoMerz.png" alt="" />
               </div>
               <div className="MerzAestheticsBoxMain font24">
                  <div className="MerzAestheticsTextWBox Raleway ">
                     <p>
                        Merz Aesthetics es una compañia de estética médica con más de 110 años de experiencia en el mercado. Nuestra sede global se encuentra en Raleigh, Carolina del Norte, Estados Unidos. Contamos con oficinas en 32 países de todo el mundo y hacemos parte de Merz Group, una empresa familiar fundada en 1908 y con sede en Frankfurt, Alemania.
                     </p>
                     <p>
                        Somos conocidos por construir relaciones únicas con clientes y empleados basados en la confianza para que se sientan parte de nuestra familia.
                     </p>
                  </div>
                  <div className="MerzAestheticsTextBox Raleway">
                     <p>
                        Contamos con un amplio portafolio de productos probados científicamente que ioncluye inyectables, dispositivos médicos y tratamientos para el cuidado de la piel, diseñados para satisfacer las necesidades de cada paciente con los más altos estándares de seguridad y eficacia.
                     </p>
                     <p>
                        <b>Para mayor información visita <a href="https://merzaesthetics.com/" target="blank">www.merzaesthetics.com</a></b>
                     </p>
                  </div>
               </div>
               <div className="BotonsGPBox justify-content-center font24">
                     <div className="InfoXeoBox">
                        <Link to="/home" target="_top">
                           <img className="InfoXeo" src="/assets/img/Pics/BotonHome.png" alt="Xeomin" />
                        </Link>
                     </div>
                     <div className="CampaingnGlobalBox">
                        <Link to="/xeomin" target="_top">
                           <img className="CampaingnGlobal" src="/assets/img/Pics/BotonXeo.png" alt="Xeomin" />
                        </Link>
                     </div>
                  </div>
            </div>
         </React.Fragment>
      );
   }
}