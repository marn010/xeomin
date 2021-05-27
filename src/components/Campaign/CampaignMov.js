import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Social from '../Social/Social';

import './Campaign.css';

export default class CampaignMov extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="CampaignMainBox CampaignMov">
               <div className="CampaignHeader">
                  <img className="HeaderCampaingn" src="/assets/img/Pics/HeaderCampaingnMov.png" alt="HeaderCampaign" />
               </div>
               <div className="CampaignHeaderText InitialCampaingnBox">
                  <div className="InitialCampaingnText Raleway font24 MerzAestheticsTextWBox">
                     <p> 
                        Merz Aesthetics, la empresa más grande dedicada a la estética médica a nivel mundial ha anunciado una sociedad con Gwyneth Paltrow, actriz, autora y empresaria, ganadora de un Óscar y un premio Emmy, para el lanzamiento de la primera campaña mundial sobre belleza.
                     </p>
                  </div>
               </div>
               <div className="GwynethBox">
                  <img className="GPBeauty" src="/assets/img/Pics/GPBeautyMov.png" alt="" />
               </div>
               <div className="GwynethPostText justify-content-center Raleway font24">
                  <p>
                     Durante esta campaña incentivará a las mujeres a tomarse el tiempo para sí mismas y priorizar el autocuidado, especialmente ahora; compartirá detalles sobre lo que hace para <span className="XeominBlue"><b>verse y sentirse mejor, </b></span> y pedirá a las mujeres que hagan lo mismo en las redes sociales usando el hashtag <span className="XeominBlue"><b> #GoPureStayReal.</b></span>
                  </p>
               </div>
               <div className="VideoPure">
                  <div className="VidPureMov">
                     <p className="VideoPureText RalewayBold fonrt 40">
                        <b>
                        “Admito que no era fan de las inyecciones antiarrugas para suavizar mis líneas de expresión. Entonces encontré una que es diferente”
                        </b>
                     </p>
                     <iframe className="VideoMobile VidPure" title="vimeo-player" src="https://player.vimeo.com/video/552619675" /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                  </div>
               </div>
               <div className="VideoPurePostTextBox justify-content-center Raleway font24">
                  <p className="EmotionText">
                     <b className="XeominBlue">Paltrow</b> es considerada ampliamente una <b className="XeominBlue"> autoridad en la belleza y el bienestar,</b> por lo cual esta campaña se vincula a su filosofía sobre la belleza: <b className="XeominBlue">"las mujeres deben darse el permiso de hacer lo que quieran para sentirse bien".</b>
                  </p>
                  <p>
                     "La pasión de Gwyneth por le conocimiento y el aprendizaje, su perspectiva profundamente personal sobre la belleza y el envejecimiento, y su estándar puro de belleza, son cualidades que admiramos en Merz Aesthetics y son los valores que compartimos como empresa"<b className="XeominBlue">dijo Bob Rhatigan. Director Ejecutivo Global de Merz Aesthetics.</b>
                  </p>
               </div>
               <div className="VideoPurify">
                  <div className="row justify-content-center rowPurify VidPurifyMov" style={{padding:"5% 0%"}}>
                     <div className="col-12">
                        <p className="VideoPurifyText RalewayBold font40">
                           <b>
                           “Me encanta Xeomin”
                           </b>
                        </p>
                     </div>
                     <div className="col-12">
                     <iframe title="vimeo-player" src="https://player.vimeo.com/video/552620016" className="VideoMobile VidPurify" /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                     </div>
                  </div>
               </div>
               <div className="VideoPurifyPostTextBox justify-content-center Raleway XeominBlue font24">
                  <p>
                     Esta será la primera <b>campaña global de marketing para Merz Aesthetics</b> desde que la compañia anunció en noviembre de 2019 que operaria de forma independiente como el mayor negocio dedicado a la estética médica a nivel mundial
                  </p>
               </div>               
               <div className="MERZBox2">
                  <img src="/assets/img/Pics/LogoMerz.png" alt="" />
               </div>
               <div className="MerzAestheticsBoxMain Raleway font24">
                  <p>
                     Merz Aesthetics es una compañia de estética médica con más de 110 años de experiencia en el mercado. Nuestra sede global se encuentra en Raleigh, Carolina del Norte, Estados Unidos. Contamos con oficinas en 32 países de todo el mundo y hacemos parte de Merz Group, una empresa familiar fundada en 1908 y con sede en Frankfurt, Alemania.<br/>
                     Somos conocidos por construir relaciones únicas con clientes y empleados basados en la confianza para que se sientan parte de nuestra familia.
                  </p>
                  <p>
                     Contamos con un amplio portafolio de productos probados científicamente que incluye inyectables, dispositivos médicos y tratamientos para el cuidado de la piel, diseñados para satisfacer las necesidades de cada paciente con los más altos estándares de seguridad y eficacia.
                  </p>
                  <p className="XeominBlue">
                     Para mayor información visita <a href="https://merzaesthetics.com/" target="blank">merzaesthetics.com</a>
                  </p>
               </div>
               <div className="BotonsBox justify-content-center font24">
                  <div className="CampaingnGlobalBox">
                     <Link to="/home" target="_top" rel="noreferrer">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/BotonHome.png" alt="Campaign" />
                     </Link>
                  </div>
                  <div className="InfoXeoBox">
                     <Link to="/xeomin" target="_top" rel="noreferrer">
                        <img className="InfoXeo" src="/assets/img/Pics/BotonXeo.png" alt="Xeomin" />
                     </Link>
                  </div>
               </div>
               <div style={{display:"block",margin:"0% auto", width:"90%"}}>
                  <Social/>
               </div>
            </div>
         </React.Fragment>
      );
   }
}