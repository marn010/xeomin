import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Animate, AnimateGroup } from 'react-simple-animate';
import './Campaign.css';

export default class CampaignWeb extends Component{
   render(){
      return(
         <React.Fragment>
            <div className="CampaignMainBox CampaignWeb">
            <AnimateGroup play>
               <div className="CampaignHeader">
                  <img className="HeaderCampaingn" src="/assets/img/Pics/HeaderCampaingn.png" alt="HeaderCampaign" />
               </div>
               <div className="GoPure">
                  <div className="row justify-content-center InitialCampaingnBox">
                     <div className="col-12 InitialCampaingnText Raleway font24">
                        <Animate
                           start={{
                              opacity:"0.1"
                           }}
                           end={{
                              opacity:"1.0"
                           }}
                           duration={1.8}
                           sequenceIndex={0}
                        >
                        <p>
                           Merz Aesthetics, la empresa más grande dedicada a la estética médica a nivel mundial ha anunciado una sociedad con <b>Gwyneth Paltrow</b>, actriz, autora y empresaria, ganadora de un Óscar y un premio Emmy, para el lanzamiento de la primera campaña mundial sobre belleza.
                        </p>
                        </Animate>
                     </div>
                  </div>
               </div>
               <div className="GwynethBox">
                  <Animate
                     start={{
                        opacity:"0.2"
                     }}
                     end={{
                        opacity:"1.0"
                     }}
                     duration={1.0}
                     sequenceIndex={1}
                  >
                  <img className="GPBeauty" src="/assets/img/Pics/GPBeauty.png" alt="" />
                  </Animate>
               </div>
               <div className="GPText Raleway font21">
                  <Animate
                     start={{
                        opacity:"0.2"
                     }}
                     end={{
                        opacity:"1.0"
                     }}
                     duration={1.0}
                     sequenceIndex={2}
                  >
                  <p>
                     Durante esta campaña incentivará a las mujeres a tomarse el tiempo para sí mismas y priorizar el autocuidado, especialmente ahora; compartirá detalles sobre lo que hace para <span className="XeominBlue"><b>verse y sentirse mejor, </b></span> y pedirá a las mujeres que hagan lo mismo en las redes sociales usando el hashtag <span className="XeominBlue"><b> #GoPureStayReal.</b></span>
                  </p>
                  </Animate>
               </div>
               <div className=" VideoPure">
                  <div className="row justify-content-center VidPureWeb">
                     <div className="col-4 VideoTitle">
                        <p className="VideoPureText RalewayBold font24" >
                           <Animate
                              start={{
                                 opacity:"0.2"
                              }}
                              end={{
                                 opacity:"1.0"
                              }}
                              duration={1.0}
                              sequenceIndex={3}
                           >
                           <b>
                              "Ayudar a las mujeres a encontrar productos puros hace parte de mi rutina"
                           </b>
                           </Animate>
                        </p>
                     </div>
                     <div className="col-6">
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/529064794" className="VidPure " /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                     </div>
                  </div>
               </div>
               <div className="MerzText">
               <Animate 
                  start={{
                     opacity:"0.1",
                     transform: "translateX(-200px)"
                  }}
                  end={{
                     opacity:"1.0",
                     transform: "translateX(0px)"
                  }}
                  duration={1.5}
                  sequenceIndex={4}
               >
                  <div className="row font18">
                     <div className="col-6 RalewayBold ">
                        <p className="EmotionText">
                           <b className="XeominBlue">Paltrow</b> es considerada ampliamente una <b className="XeominBlue"> autoridad en la belleza y el bienestar,</b> por lo cual esta campaña se vincula a su filosofía sobre la belleza: <b className="XeominBlue">"las mujeres deben darse el permiso de hacer lo que quieran para sentirse bien".</b>
                        </p>
                     </div>
                     <div className="col-6 Raleway">
                        <p>
                           "La pasión de Gwyneth por le conocimiento y el aprendizaje, su perspectiva profundamente personal sobre la belleza y el envejecimiento, y su estándar puro de belleza, son cualidades que admiramos en Merz Aesthetics y son los valores que compartimos como empresa"<b className="XeominBlue">dijo Bob Rhatigan. Director Ejecutivo Global de Merz Aesthetics.</b>
                        </p>
                     </div>
                  </div>
               </Animate>
               </div>
               <div className=" VideoPurify">
                  <div className="row justify-content-center rowPurify VidPurifyWeb" style={{padding:"0% 0%"}}>
                     <div className="col-4 VideoTitle">
                        <p className="VideoPurifyText RalewayBold font30">
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
               <Animate 
                  start={{
                     opacity:"0.2",
                     transform:"translateY(-200px)"
                  }}
                  end={{
                     opacity:"1.0",
                     transform:"translateY(0px)"
                  }}
                  duration={1.0}
                  sequenceIndex={5}
               >
               <div className="row justify-content-center Raleway font24 XeominBlue">
                  <div className="col-7" style={{padding:"2% 0%"}}>
                  <p>
                     Esta será la primera <b>campaña global de marketing para Merz Aesthetics</b> desde que la compañia anunció en noviembre de 2019 que operaria de forma independiente como el mayor negocio dedicado a la estética médica a nivel mundial
                  </p>
                  </div>
               </div>
               </Animate>
               <div className="MERZBox2">
                  <img src="/assets/img/Pics/LogoMerz.png" alt="" />
               </div>
               <div className="MerzAestheticsBoxMain font21">
                  <div className="MerzAestheticsTextWBox Raleway ">
                  <Animate
                     start={{
                        opacity:"0.2",
                        transform:"translateX(-200px)"
                     }}
                     end={{
                        opacity:"1.0",
                        transform:"translateX(0px)"
                     }}
                     duration={1.0}
                     sequenceIndex={6}
                  >
                     <p>
                        Merz Aesthetics es una compañia de estética médica con más de 110 años de experiencia en el mercado. Nuestra sede global se encuentra en Raleigh, Carolina del Norte, Estados Unidos. Contamos con oficinas en 32 países de todo el mundo y hacemos parte de Merz Group, una empresa familiar fundada en 1908 y con sede en Frankfurt, Alemania.
                     </p>
                     <p>
                        Somos conocidos por construir relaciones únicas con clientes y empleados basados en la confianza para que se sientan parte de nuestra familia.
                     </p>
                  </Animate>
                  </div>
                  <div className="MerzAestheticsTextBox Raleway">
                  <Animate
                     start={{
                        opacity:"0.2",
                        transform:"translateX(200px)"
                     }}
                     end={{
                        opacity:"1.0",
                        transform:"translateX(0px)"
                     }}
                     duration={1.0}
                     sequenceIndex={6}
                  >
                     <p>
                        Contamos con un amplio portafolio de productos probados científicamente que ioncluye inyectables, dispositivos médicos y tratamientos para el cuidado de la piel, diseñados para satisfacer las necesidades de cada paciente con los más altos estándares de seguridad y eficacia.
                     </p>
                     <p>
                        <b>Para mayor información visita <a href="https://merzaesthetics.com/" target="blank">www.merzaesthetics.com</a></b>
                     </p>
                  </Animate>
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
            </AnimateGroup>
            </div>
         </React.Fragment>
      );
   }
}