import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* import { FadeTransform } from 'react-animation-components'; */
import { Animate, AnimateGroup } from 'react-simple-animate';
import './Xeomin.css';

export default class XeominWeb extends Component{
   render(){
      return(
         <AnimateGroup play>
         <div className="XeominMainWebBox">
            <div className="col-">
               <img className="XeominTitlePic" src="/assets/img/Background/XeominMain.png" alt="Xeomin" />
            </div>
            <div className="">
               <div className="row col-12">
                  <div className="col-1">
                     <img className="Toxina1" src="/assets/img/Pics/Toxina.png" alt="" />
                  </div>
                  <div className="col-10 justify-content-center XeominText">
                     <div>
                        <Animate 
                           start={{
                              opacity:"0.2"
                           }} 
                           end={{
                              opacity:"1"
                           }} 
                           duration={1.5} 
                           sequenceIndex={0} 
                        >
                        <p key="XeoTitle" className="XeominBlue XeominTitle Raleway font32 XeoSection RalewayBold">UNA HISTORIA QUE MARCÓ LA DIFERENCIA </p>
                        <img className="Merz_Azul" src="/assets/img/Pics/merz_azul.svg" alt="" />
                        </Animate>
                        <Animate 
                           start={{
                              opacity:"0.2"
                           }}
                           end={{
                              opacity:"1"
                           }}
                           duration={1.5}
                           sequenceIndex={1} 
                        >
                           <p className="Raleway font24 XeoSection" style={{display:"block", margin:"5% 10.5%"}}>
                              <span><b>XEOMIN</b><span className="trademark">&#174;</span>  es parte de la investigación de toda una vida. </span>
                              Hace casi 20 años, el Dr. Frevert se dio cuenta que el complejo proteico que rodea el núcleo de neurotoxinas no es necesario para su efecto terapéutico o modo de acción
                           </p>
                        </Animate>
                        <Animate
                           start={{ opacity:"0.2",
                                    transform: 'translateX(100px)'
                                 }}
                           end={{   opacity:"1",
                                    transform: "translateX(0px)"
                                 }}
                           duration={1.0}
                           sequenceIndex={2}
                        >
                        <div className="row col-10 justify-content-center XeoSection" style={{display:'flex', margin:"0% auto"}}>
                           <div className="col-6 XeoBorderL ">
                              <p className="XeominBlue Raleway font24">
                                 <b className="RalewayBold ">"El complejo proteico que forma parte de una toxina botulinica es simplemente una impureza"</b>, explica el Dr. Frevert.
                              </p>
                           </div>
                           <div className="col-6">
                              <p className="Raleway font24">
                                 Descubrió que solo se requeria la proteina responsable de la actiuvidad farmacológica, la neurotoxina en su estado puro
                              </p>
                           </div>
                        </div>
                        </Animate>
                     
                     </div>
                  </div>
                  <div className="col-1">
                  <img className="Toxina2" src="/assets/img/Pics/Toxina.png" alt="" />
                  </div>
               </div>
               <div className="XeoCiteBox justify-content-center" style={{display:"flex", margin:"auto"}}>
                  
                     <div className="XeoCitePic" style={{paddingTop:"4%"}}>
                        <img className="ToxinaBlue" src="/assets/img/Pics/ToxinaBlue.png" alt="ToxinaPura" />
                     </div>
                     <div className="XeoCiteText XeoSection">
                     <Animate
                        start={{
                           opacity:"0.2",
                           transform:"translateX(-200px)"
                        }}
                        end={{
                           opacity:"1",
                           transform:"translateX(0px)"
                        }}
                        duration={1.5}
                        sequenceIndex={3}
                     >
                        <p className="XeominBlue Raleway font24">
                           <b className="RalewayBold">"Sabia que el complejo proteico puede estimular el sistema inmunológico para producir anticuerpos que neutralizan la neurotoxina"</b>, reveló
                        </p>
                     </Animate>
                     </div>
               </div>
               <div className="DrFrevert col-11">
                     <div className="DrFrevertBox">
                        <Animate 
                           start={{
                              opacity:"0.2"
                           }}
                           end={{
                              opacity:"1"
                           }}
                           duration={1.5}
                           sequenceIndex={3}
                        >
                        <img className="DrFrevertPic" src="/assets/img/Pics/Dr_Frevert.png" alt="DrFrevert" />
                        </Animate>
                     </div>
                     <div className="DrFrevertTextBox">
                        <h3 className="DrFrevertText RalewayBold font30">
                           El Dr. Jurgen Frevert podria ser descrito como el padre de XEOMIN<span className="trademark">&#174;</span>.
                        </h3>
                        <p className="Raleway font21">
                           Hace más de 30 años, el Dr. formaba parte de una investigfacion doctoral y se le encomendó <b>purificar</b> la toxina botulinica tipo A con la que trabajaba en ese momento (Onabotulinim Toxin A).
                        </p>
                  </div>
               </div>
               <Animate
                  start={{
                     opacity:"0.2"
                  }}
                  end={{
                     opacity:"1.0"
                  }}
                  duration={1.5}
                  sequenceIndex={4}
               >
               <div className="XeoHistory">
                  <p className="XeominBlue RalewayMedium font24 FrevertPostText XeoSection">
                     Hacia finales de la década de 1990, comenzó el proyecto que dio como resultado XEOMIN<span className="trademark">&#174;</span>. Realizando fermentaciones durante la semana, el Dr. Frevert pasó muchos fines de semana con colegas igualmente dedicados a purificar y experimentar nuevas formas de estabilizar la neurotoxina y descubrió que la sacarosa era el excipiente más efectivo en este sentido.
                  </p>
               </div>
               <div className="FrevertScientific XeoHistory">
                  <div className="XeoSection ">
                     <p className="XeominBlue Raleway font24 ">
                        "Como cientifico, bioquímico, es muy satisfactorio haber desarrollado un producto, con mis propias manos".
                     </p>
                  </div>
               </div>
               </Animate>
               <div className="XeoProd">
                  <div className="XeoProdLeft">
                     <img className="XeominLabPic" src="/assets/img/Pics/XeominLab.png" alt="" />
                  </div>
                  <div className="XeoProdRight Raleway font21"/*font24 */>
                  <Animate
                  start={{
                     opacity:"0.2"
                  }}
                  end={{
                     opacity:"1.0"
                  }}
                  duration={1.0}
                  delay={1.0}
                  sequenceIndex={5}
                  >
                     <p>
                        XEOMIN<span className="trademark">&#174;</span> es un producto de alta calidad: de todos los pacientes tratados hasta la fecha <span className="XeominBlue"> ninguno ha desarrollado anticuerpos neutralizantes o se ha convertido en no respondedores secundarios </span>, lo que permite a los pacientes beneficiarse de tratamientos repetidos.
                     </p>
                     <p>
                        No solo la neurotoxina es la única proteina bacteriana presente en cada vial de las diferentes preparaciones de toxina botulinica disponibles en el mercado; XEOMIN<span className="trademark">&#174;</span> a través de su proceso de manufactura y fabricación tan perfectamente controlado, <span className="XeominBlue">logra extraer la neurotoxina purificada sin perder su actividad biológica.</span>
                     </p>
                     <p>
                        Esto significa que, si bien hay una menor carga proteica en el vial, <span className="XeominBlue">XEOMIN<span className="trademark">&#174;</span> al contener unicamente la neurotoxina purificada tiene la mayor potencia específica </span> en comparación con otros productos de toxina botulinica".
                     </p>
                     <p className="font18">
                        (Frevert J. Drugs R D 2010;10:67-73.)
                     </p>
                  </Animate>
                  </div>
               </div>
               <hr/>
               <div className="row col-12 justify-content-center XeoSection">
                  <p className="col-12 XeominBlue XeominLabFinalText RaleWayBold font36">
                     <b>LA TECNOLOGÍA DETRÁS DE LA INNOVACIÓN</b>
                  </p>
                  <img className="Merz_Azul2" src="/assets/img/Pics/merz_azul.svg" alt="" />
               </div>
               <div className="XtractVideo row justify-content-center">
                  <div className="col-5 Raleway font30">
                     <p>
                        <b className="RalewayBold">
                           XTRACT TECHNOLOGY </b>
                        PROCESO DE MANUFACTURA Y PRODUCCIÓN
                        </p>
                  </div>
                  {/*Video  Responsive*/}
                  <div className="col-7 WebVidBox">
                  <iframe title="vimeo-player" src="https://player.vimeo.com/video/528570742"  frameborder="0" allowfullscreen ></iframe>
                  </div>
               </div>
               <div className="justify-content-center" style={{display:"flex",margin:"0% auto", width:"65.0%"}}>
                  <div className="row XeoProc">
                     <div className="XeoProcLeft">
                        <img className="XtractPic" src="/assets/img/Pics/Xtract.png" alt="Xtract" />
                     </div>
                     <div className="XeoProcRight">
                        <p className="XeominBlue Raleway font21">
                           A través del proceso XTRACT Technology se consigue remover el complejo proteico, obteniendo una neurotoxina activa (150kDA) purificada que ofrece un menor riesgo de inmunogenicidad y una alta estabilidad.
                        </p>
                        <p className="font16">
                           J Drugs Dermatol. 2019; 18 (1) : 52-57. S.K. Sharma. Toxicon 41 (2003) 321-331
                        </p>
                     </div>
                  </div>
               </div>
               <hr/>
               
               <div className="XeominStepsBox">
                  <p className="XeominBlue XeominStepsTitle RalewayBold font32 XeoSection">
                     PASOS PARA UNA ADECUADA RECONSTITUCIÓN Y DILUCIÓN DE XEOMIN<span className="trademark">&#174;</span>
                  </p>
                  <img className="Merz_Azul" src="/assets/img/Pics/merz_azul.svg" alt="" />
                  <Animate
                  start={{
                     opacity:"0.3",
                     transform:"translateX(-300px)"
                  }}
                  end={{
                     opacity:"1.0",
                     transform:"translateX(0px)"
                  }}
                  duration={1.0}
                  delay={1.0}
                  sequenceIndex={6}
                  >
                  <div className="row XeoSteps offset-1 font21">
                     <div className="col-5">
                        <span className="XeominBlue Paso1Text RalewayBold font32">
                           Paso 1:
                        </span>
                        <img className="Paso1Pic" src="/assets/img/Pics/Paso1.png" alt="Paso 1"  />
                     </div>
                     <div className="col-7 XeominTips Raleway">
                        <p className="XeominTipsBox XeominTipsText">
                        <span className="XeominTipsDot "></span>
                           Primero debe abrir la solución salina que Merz le proveerá y aspirar 2.0ml de volumen para la reconstitución.
                        </p>
                        <p className="XeominTipsBox XeominTipsText">
                        <span className="XeominTipsDot"></span>
                           Se recomienda usar una aguja corta de 20 -27 gauge para la reconsitutción de XEOMIN<span className="trademark">&#174;</span>; habitualmente la jeringa ideal llegará con el producto en el kit de dilución.
                        </p>
                        <p className="XeominTipsBox XeominTipsText">
                        <span className="XeominTipsDot"></span>
                           Limpie el tapón e introduzca la aguja aproximadamente a 45° en dirección a la pared del frasco, dejando salir el líquido lentamente.
                        </p>
                        <p className="XeominTipsText" style={{paddingLeft:"4%"}}>
                        <span className="XeominTipsDot"></span>
                           Debido al proceso de sellado al vacio de XEOMIN<span className="trademark">&#174;</span>, la solución salina deberá ser aspirada al interior del vial por si sola.</p>
                     </div>
                  </div>
                  </Animate>
                  <Animate
                  start={{
                     opacity:"0.3",
                     transform:"translateX(300px)"
                  }}
                  end={{
                     opacity:"1.0",
                     transform:"translateX(0px)"
                  }}
                  duration={1.0}
                  delay={1.0}
                  sequenceIndex={6}
                  >
                  <div className="row XeoSteps offset-1 font21">
                     <div className="col-5 Raleway XeoSection">
                        <p className="XeominBlue RalewayBold">Paso 2:</p>
                        <p className="Paso2Text">Retire la aguja y realice movimientos circulares dejando que el liquido toque todas las paredes del vial y el tapón de goma, y regrese a su posición inicial, repitiendo estos movimientos varias veces hasta lograr una mezcla homogénea.</p>
                     </div>
                     <div className="col-7">
                        <img className="Paso2Pic" src="/assets/img/Pics/Paso2.png" alt="Paso 2" />
                     </div>
                  </div>
                  </Animate>
                  <div className="row XeoSteps offset-1 font21">
                     <div className="XeominImportant XeominBlue RalewayMedium">
                        <p>
                           IMPORTANTE:
                        </p>
                        <p>
                           El frasco no debe ser agitado vigorosamente.
                        </p>
                     </div>
                  </div>
                  <Animate
                  start={{
                     opacity:"0.3",
                     transform:"translateX(-300px)"
                  }}
                  end={{
                     opacity:"1.0",
                     transform:"translateX(0px)"
                  }}
                  duration={1.0}
                  delay={1.0}
                  sequenceIndex={6}
                  >
                  <div className="row XeoSteps offset-1 font21">
                     <div className="col-5 XeoSection">
                        <img className="Paso3Pic" src="/assets/img/Pics/Paso3.png" alt="Paso 3" />
                     </div>
                     <div className="col-7 XeominTips Raleway XeoSection">
                        <p className="XeominBlue RalewayBold">
                           Paso 3:
                        </p>
                        <p className="XeominTipsBox XeominTipsText "> 
                           <span className="XeominTipsDot"></span>Llene la jeringa de su elección con la solución lista para usarse.
                        </p>
                        <p className="XeominTipsBox XeominTipsText">
                        <span className="XeominTipsDot"></span>
                           La solución lista para usarse debe ser homogénea, incolora y libre de partículas. XEOMIN<span className="trademark">&#174;</span> no debe ser utilizado si la solución reconstituida tiene una apariencia opaca o contiene material floculado o en partículas.
                        </p>
                        <p className="XeominTipsText">
                        <span className="XeominTipsDot"></span>
                           La solución reconstituida de XEOMIN<span className="trademark">&#174;</span> debe ser utilizada para inyección intramuscular y puede ser almacenado en refrigeración por 24h a una temperatura de 2°C a 8°C.
                        </p>
                     </div>
                  </div>
                  </Animate>
               </div>
               <div className="VideoReconstitucion row">
                  <div className="col-5 RalewayBold font40 XeominBlue" style={{textAlign:"left"}}>
                     <p>
                        <b>
                           Video Reconstitución
                        </b>
                     </p>
                  </div>
                  <div className="col-7 WebVidBox">
                     <iframe title="vimeo-player" src="https://player.vimeo.com/video/528571892" width="640" height="359" frameborder="0" allowfullscreen></iframe>
                  </div>
               </div>
               <div className="XeoTechnique justify-content-center">
                  <p className="XeominBlue Raleway font32 XeoSection">
                     <b>GUÍA PÁSO A PASO: TÉCNICA #ONE21</b>
                  </p>
                  <img className="Merz_Azul" src="/assets/img/Pics/merz_azul.svg" alt="" />
               </div>
               <div className="justify-content-center One21Box XeoSection">
                  <div className="OneBoxLeft">
                     <img className="One21Pic" src="/assets/img/Pics/One21.png" alt="one21" />
                  </div>
                  <div className="OneBoxRight Raleway One21Text font21">
                     <p>
                        <b className="RalewayBold One21Full">one<span className="One21">2</span>1</b> es una exclusiva técnica que apunta a un tratamiento individualizado para el modelamiento de las cejas, tratamiento de arrugas frontales, glabelares y perioculares, basada en la anatomía y los resultados deseados por los pacientes.
                     </p>
                  </div>
               </div>
               <div className="VideoONE21 justify-content-center">
                  <div className="VideoONE21Inner justify-content-center">
                     <div className="RalewayBold font32 VideoONE21T justify-content-center">
                        <p className="RalewayBold font36">
                           La técnica 
                           #ONE21
                        </p>
                        <p className="RalewayBold font21">
                           se divide en 3 importantes pasos:
                        </p>
                        <ol className="list Raleway font21">
                           <li>Evaluación</li>
                           <li>Adaptación</li>
                           <li>Personalización</li>
                        </ol>
                     </div>
                     <div className="VideoOneBox WebVidBox">
                        <iframe  title="vimeo-player" src="https://player.vimeo.com/video/528575563" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                     </div>
                  </div>
               </div>
                  <div className="container col-12 Raleway XeoSection">
                     <p className="XeominBlue XeoDownloadText font24">
                        Si desea conocer más de esta técnica <b>descargue</b> la guía paso a paso
                     </p>
                     <Link className="XeoDownloadBTN font21"  to={{pathname:"/assets/pdf/GUIIATECNICAPASOAPASO.pdf"}} target="_blank" >
                        Descargar
                     </Link>
                  </div>
                  <div className="BotonsXeoBox justify-content-center font24">
                     <div className="InfoXeoBox">
                        <Link to="/home" target="_top">
                           <img className="InfoXeo" src="/assets/img/Pics/BotonHome.png" alt="Xeomin" />
                        </Link>
                     </div>
                     <div className="CampaingnGlobalBox">
                        <Link to="/campaign" target="_top">
                           <img className="CampaingnGlobal" src="/assets/img/Pics/BotonGP.png" alt="Campaign" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            </AnimateGroup>
         /* </div> */
      );
   }
}
/* <div className="justify-content-center XeoRecBox" style={{display:"flex",margin:"5% auto", width:"65%"}}>
                  <div className="col-5">
                     <p className="XeominBlue XeominRec Raleway font32">
                        <b className="RalewayBold font40">XEOMIN<span className="trademark">&#174;</span>: </b>
                        RECONSTITUCIÓN Y DILUCIÓN
                     </p>
                  </div>
                  <div className="col-7 XeominRecText">
                     <p className="XeominBlue RalewayBold font32">
                        <b>
                           XEOMIN<span className="trademark">&#174;</span> puede ayudarlo a alcanzar el efecto deseado en sus pacientes.
                        </b>
                     </p>
                     <p className="XeominBlue font18">
                        XEOMIN<span className="trademark">&#174;</span> (incobotulinumtoxinaA) Summary of Product Characteristics. MerzPharmaceuticals GmbH.
                     </p>
                  </div>
               </div> */
               /* <div className="row XeoDose">
                  <div className="col-3">
                     <img className="XeominVialPic" src="/assets/img/Pics/XeominVial.png" alt="" />
                  </div>
                  <div className="col-9 Raleway font24">
                     <p>
                        El resultado final <span className="XeominBlue"> dependerá de la dosis y la técnica utilizada.</span>
                     </p>
                     <p>
                        La dosis óptima en el plano adecuado y con la cantidad necesaria de puntos de aplicación las determina de manera individualizada el médico tratante.
                     </p>
                     <p>
                        <span className="XeominBlue">Pueden existir variaciones </span> en cada paciente de acuerdo a su <span className="XeominBlue"> patrón de contracción y fuerza muscular, entre otros.</span>
                     </p>
                     <p>
                        <span className="XeominBlue">No existe una técnica única de aplicación </span> que funcione para todos los médicos y pacientes.
                     </p>
                  </div>
               </div> */