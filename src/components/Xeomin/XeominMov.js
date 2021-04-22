import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

import "./Xeomin.css";

export default class XeominMov extends Component{
   render(){
      return(
         <div className="XeominMainMovBox ">
            <div className="col-">
               <img className="XeominTitlePic" src="/assets/img/Background/XeominMainMov.png" alt="Xeomin" />
            </div>
            <div className="">
               <div className="row col-12 justify-content-center FirstBox">
                  <div className="col-11  XeominText">
                     <div>
                        <img className="Toxina1" src="/assets/img/Pics/Toxina.png" alt="" />
                        <p className="XeominBlue XeominTitle Raleway font32">
                           <b className="RalewayBold">
                              UNA HISTORIA QUE MARCÓ LA DIFERENCIA
                           </b>
                        </p>
                        <img className="Merz_Azul" src="/assets/img/Pics/merz_azul.svg" alt="" />
                        <img className="Toxina2" src="/assets/img/Pics/Toxina.png" alt="" />
                        <p className="Raleway font24">
                           <span><b>XEOMIN</b><span className="trademark">&#174;</span>  es parte de la investigación de toda una vida. </span>
                           Hace casi 20 años, el Dr. Frevert se dio cuenta que el complejo proteico que rodea el núcleo de neurotoxinas no es necesario para su efecto terapéutico o modo de acción
                        </p>
                        <div className="XeoBorder">
                           <p className="XeominBlue Raleway font24">
                              <b className="RalewayBold ">"El complejo proteico que forma parte de una toxina botulinica es simplemente una impureza"</b>, explica el Dr. Frevert.
                           </p>
                        </div>
                        <div className="">
                           <p className="Raleway font24">
                              Descubrió que solo se requeria la proteina responsable de la actividad farmacológica, la neurotoxina en su estado puro
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="XeoCiteBox justify-content-center">
                     <div className="ToxinaBlueBox">
                        <img className="ToxinaBlue" src="/assets/img/Pics/ToxinaBlue.png" alt="ToxinaPura" />
                     </div>
                     <div className="XeoCiteText">
                        <p className="XeominBlue Raleway font24">
                           <b className="RalewayBold">"Sabia que el complejo proteico puede estimular el sistema inmunológico para producir anticuerpos que neutralizan la neurotoxina"</b>, reveló
                        </p>  
                     </div>
               </div>
               <div className="DrFrevert ">
                     <div className="DrFrevertPicBox">
                        <img className="DrFrevertPic" src="/assets/img/Pics/Dr_FrevertMov.png" alt="DrFrevert" />
                     </div>
                     <div className="DrFrevertTextBox">
                        <p className="DrFrevertText RalewayBold font24">
                           El Dr. Jurgen Frevert podria ser descrito como el padre de XEOMIN<span className="trademark">&#174;</span>.
                        </p>
                        <p className="Raleway font21">
                           Hace más de 30 años, el Dr. formaba parte de una investigfacion doctoral y se le encomendó <b>purificar</b> la toxina botulinica tipo A con la que trabajaba en ese momento (Onabotulinim Toxin A).
                        </p>
                     </div>
               </div>
               <div className="FrevertPostTextBox">
                  <p className="XeominBlue RalewayMedium font24 FrevertPostText">
                     Hacia finales de la década de 1990, comenzó el proyecto que dio como resultado XEOMIN<span className="trademark">&#174;</span>. Realizando fermentaciones durante la semana, el Dr. Frevert pasó muchos fines de semana con colegas igualmente dedicados a purificar y experimentar nuevas formas de estabilizar la neurotoxina y descubrió que la sacarosa era el excipiente más efectivo en este sentido.
                  </p>
                  <p className="XeominBlue Raleway font24 ">
                     "Como cientifico, bioquímico, es muy satisfactorio haber desarrollado un producto, con mis propias manos".
                  </p>
               </div>
               <div className="XeoMovLabBox">
                  <div className="XeoMovLabL">
                     <img className="XeominLabPic" src="/assets/img/Pics/XeoMovLab.png" alt="" />
                  </div>
                  <div className="XeoMovLabR Raleway font24">
                     <p>
                        XEOMIN<span className="trademark">&#174;</span> es un producto de alta calidad: de todos los pacientes tratados hasta la fecha <span className="XeominBlue"> ninguno ha desarrollado anticuerpos neutralizantes o se ha convertido en no respondedores secundarios </span>, lo que permite a los pacientes beneficiarse de tratamientos repetidos. <br/><br/>
                        No solo la neurotoxina es la única proteina bacteriana presente en cada vial de las diferentes preparaciuones de toxina botulinica disponibles en el mercado; XEOMIN<span className="trademark">&#174;</span> a través de su proceso de manufactura y fabricación tan perfectamente controlado, <span className="XeominBlue">logra extraer la neurotoxina purificada sin perder su actividad biológica.</span><br/><br/>
                        Esto significa que, si bien hay una menor carga proteica en el vial, <span className="XeominBlue">XEOMIN<span className="trademark">&#174;</span> al contener unicamente la neurotixina purificada tiene la mayor potencia específica </span> en comparación con otros productos de toxina botulinica".
                     <span className="font18">(Frevert J. Drugs R D 2010;10:67-73.)</span>
                     </p>
                  </div>
               </div>
               <hr/>
               <div className="row col-12 XeominBlue justify-content-center XtractBox">
                  <p className="col-12 XeominLabFinalText RaleWayBold font32">
                     <b>LA TECNOLOGÍA DETRÁS DE LA INNOVACIÓN</b>
                  </p>
                  <img className="Merz_Azul" src="/assets/img/Pics/merz_azul.svg" alt="" />
               </div>
               <div className="XtractVideo row col-12 justify-content-center">
                  <p style={{textAlign:"center"}}>
                     <b className="RalewayBold">XTRACT TECHNOLOGY: </b>
                        PROCESO DE MANUFACTURA Y PRODUCCIÓN
                  </p>
                  <iframe className="VideoMobile" title="vimeo-player" src="https://player.vimeo.com/video/528570742"  frameborder="0" allowfullscreen></iframe>
               </div>
               <div className="justify-content-center XtractTechPostText">
                  <div className="XtractTechPicBox" style={{padding:"0%"}}>
                     <img className="XtractPic" src="/assets/img/Pics/Xtract.png" alt="Xtract" />
                  </div>
                  <div className="XtractTechTextBox" style={{paddingRight:"0%"}}>
                     <p className="XeominBlue Raleway font21">
                        <b>
                        A través del proceso XTRACT Technology se consigue remover el complejo proteico, obteniendo una neurotoxina activa (150kDA) purificada que ofrece un menor riesgo de inmunogenicidad y una alta estabilidad.
                        </b>
                     </p>
                  </div>
               </div>
               <p className="XtractTechCite font18">
                  J Drugs Dermatol. 2019; 18 (1) : 52-57. S.K. Sharma. Toxicon 41 (2003) 321-331
               </p>
               <hr/>
               <div className="XeominSteptsTitle Raleway font24">
                  <p className="XeominBlue XeominStepsTitle RalewayBold font24">
                  PASOS PARA UNA ADECUADA RECONSTITUCIÓN Y DILUCIÓN DE XEOMIN<span className="trademark">&#174;</span>
                  </p>
                  <img className="Merz_Azul" src="/assets/img/Pics/merz_azul.svg" alt="" />
               </div>
               <div className="XeominStepsBox font24"> 
                  <div className="Step1">
                     <div className="Step1L">
                        <p className="XeominBlue Paso1Text RalewayBold font32">Paso 1:</p>
                        <img className="Paso1Pic" src="/assets/img/Pics/Paso1.png" alt="Paso 1"  />
                     </div>
                     <div className="Step1R XeominTips Raleway">
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
                        <p className="XeominTipsText">
                        <span className="XeominTipsDot"></span>
                           Debido al proceso de sellado al vacio de XEOMIN<span className="trademark">&#174;</span>, la solución salina deberá ser aspirada al interior del vial por si sola.</p>
                     </div>
                  </div>
                  <div className="Step2">
                     <div className="Step2L Raleway">
                        <p className="XeominBlue RalewayBold">Paso 2:</p>
                        <p className="Paso2Text">Retire la aguja y realice movimientos circulares dejando que el liquido toque todas las paredes del vial y el tapón de goma, y regrese a su posición inicial, repitiendo estos movimientos varias veces hasta lograr una mezcla homogénea.</p>
                     </div>
                     <div className="Step2R" style={{padding:"0%"}}>
                        <img className="Paso2Pic" src="/assets/img/Pics/Paso2.png" alt="Paso 2" />
                     </div>
                  </div>
                  <div className="XeominImportant XeominBlue RalewayMedium">
                     <p>
                        IMPORTANTE:
                     </p>
                     <p>
                        El frasco no debe ser agitado vigorosamente.
                     </p>
                  </div>
                  <div className="Step3">
                     <div className="Step3L XeominTips Raleway">
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
                     <div className="Step3R" style={{padding:"0%"}}>
                        <img className="Paso3Pic" src="/assets/img/Pics/Paso3.png" alt="Paso 3" />
                     </div>
                  </div>
               </div>
               <div className="VideoReconstitucion">
                  <div className="col-12 RalewayBold font40 XeominBlue">
                     <p>
                        <b>
                           VIDEO RECONSTITUCIÓN
                        </b>
                     </p>
                  </div>
                  <div className="col-12">
                     <iframe className="VideoMobile" title="vimeo-player" src="https://player.vimeo.com/video/528571892" frameborder="0" allowfullscreen></iframe>
                  </div>
               </div>
               <div className="XeoTechnique justify-content-center">
                  <p className="XeominBlue col-12 RalewayBold font32">
                     GUÍA PASO A PASO: TÉCNICA #ONE21
                  </p>
                  <img className="Merz_Azul" src="/assets/img/Pics/merz_azul.svg" alt="" />
               </div>
               <div className="One21Box justify-content-center font21">
                  <div className="One21PicBox">
                     <img className="One21Pic" src="/assets/img/Pics/One21.png" alt="one21" />
                  </div>
                  <div className="One21TextBox">
                     <p>
                        <b className="Raleway One21Full">#one<span className="One21">2</span>1</b> es una exclusiva técnica que apunta a un tratamiento individualizado para el modelamiento de las cejas, tratamiento de arrugas frontales, glabelares y perioculares, basada en la anatomía y los resultados deseados por los pacientes.
                     </p>
                  </div>
               </div>
               <img className="ProtocolMov" src="/assets/img/Pics/ProtocoloMov.png" alt="Protocolo" />
               <div className="VideoONE21 justify-content-center">
                  <div className="RalewayBold font24">
                     <iframe className="VideoMobile" title="vimeo-player" src="https://player.vimeo.com/video/528575563" frameborder="0" allowfullscreen></iframe>
                  </div>                  
               </div>
               <div className="XeoDownloadTextBox Raleway">
                  <p className="XeominBlue XeoDownloadText font21">
                     Si desea conocer más de esta técnica descargue la guía paso a paso
                  </p>
                  <Link className="XeoDownloadBTN"  to={{pathname:"/assets/pdf/GUIIATECNICAPASOAPASO.pdf"}} target="_blank" >
                     Descargar
                  </Link>
               </div>
               <div className="BotonsBox justify-content-center font24">
                  <div className="InfoXeoBox">
                     <Link to="/home" target="_top">
                        <img className="InfoXeo" src="/assets/img/Pics/BotonHome.png" alt="Xeomin" />
                     </Link>
                  </div>
                  <div className="CampaingnGlobalBox">
                     <Link to="/campaign" target="_top" rel="noreferrer">
                        <img className="CampaingnGlobal" src="/assets/img/Pics/BotonGP.png" alt="Campaign" />
                     </Link>
                  </div>
               <Social />
               </div>
            </div>
         </div>
      );
   }
}