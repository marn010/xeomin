import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Xeomin.css";

export default class XeominMov extends Component{
   render(){
      return(
         <div className="XeominMainMovBox ">
            <div className="col-">
               <img className="XeominTitlePic" src="/assets/img/Background/XeominMain.png" alt="Xeomin" />
            </div>
            <div className="">
               <div className="row col-12 FirstBox">
                  <div className="col-1"></div>
                  <div className="col-10 justify-content-center XeominText">
                     <div>
                        <img className="Toxina1" src="/assets/img/Pics/Toxina.png" alt="" />
                        <p className="XeominBlue XeominTitle Raleway font32"><b className="RalewayBold">XEOMIN<span className="trademark">&#174;</span></b> ES PARTE DE LA INVESTIGACIÓN DE TODA UNA VIDA</p>
                        <img className="Toxina2" src="/assets/img/Pics/Toxina.png" alt="" />
                        <p className="Raleway font24">
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
                  <div className="col-1"></div>
               </div>
               <div className="container col-10 justify-content-center">
                  <div className="row justify-content-center">
                     <div className="col-2 ToxinaBlueBox">
                        <img className="ToxinaBlue" src="/assets/img/Pics/ToxinaBlue.png" alt="ToxinaPura" />
                     </div>
                     <div className="col-10">
                        <p className="XeominBlue Raleway font24">
                           <b className="RalewayBold">"Sabia que el complejo proteico puede estimular el sistema inmunológico para producir anticuerpos que neutralizan la neurotoxina"</b>, reveló
                        </p>  
                     </div>
                  </div>
               </div>
               <div className="DrFrevert col-11">
                  <div className="row ">
                     <div className="col-6">
                        <img className="DrFrevertPic" src="/assets/img/Pics/Dr_Frevert.png" alt="DrFrevert" />
                     </div>
                     <div className="col-6 DrFrevertTextBox">
                        <p className="DrFrevertText RalewayBold font24">
                           El Dr. Jurgen Frevert podria ser descrito como el padre de XEOMIN<span className="trademark">&#174;</span>.
                        </p>
                        <p className="Raleway font21">
                           Hace más de 30 años, el Dr. formaba parte de una investigfacion doctoral y se le encomendó <b>purificar</b> la toxina botulinica tipo A con la que trabajaba en ese momento (Onabotulinim Toxin A).
                        </p>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <p className="XeominBlue RalewayMedium font24 FrevertPostText">
                     Hacia finales de la década de 1990, comenzó el proyecto que dio como resultado XEOMIN<span className="trademark">&#174;</span>. Realizando fermentaciones durante la semana, el Dr. Frevert pasó muchos fines de semana con colegas igualmente dedicados a purificar y experimentar nuevas formas de estabilizar la neurotoxina y descubrió que la sacarosa era el excipiente más efectivo en este sentido.
                  </p>
               </div>
               <div className="row XeoMovLabBox">
                  <div className="col-4">
                     <img className="XeominLabPic" src="/assets/img/Pics/XeoMovLab.png" alt="" />
                  </div>
                  <div className="col-8 Raleway font24">
                     <p className="XeominBlue Raleway font24 ">
                        "Como cientifico, bioquímico, es muy satisfactorio haber desarrollado un producto, con mis propias manos".
                     </p>
                     <p>
                        XEOMIN<span className="trademark">&#174;</span> es un producto de alta calidad: de todos los pacientes tratados hasta la fecha <span className="XeominBlue"> ninguno ha desarrollado anticuerpos neutralizantes o se ha convertido en no respondedores secundarios </span>, lo que permite a los pacientes beneficiarse de tratamientos repetidos.
                        No solo la neurotoxina es la única proteina bacteriana presente en cada vial de las diferentes preparaciuones de toxina botulinica disponibles en el mercado; XEOMIN<span className="trademark">&#174;</span> a través de su proceso de manufactura y fabricación tan perfectamente controlado, <span className="XeominBlue">logra extraer la neurotoxina purificada sin perder su actividad biológica.</span>
                        Esto significa que, si bien hay una menor carga proteica en el vial, <span className="XeominBlue">XEOMIN<span className="trademark">&#174;</span> al contener unicamente la neurotixina purificada tiene la mayor potencia específica </span> en comparación con otros productos de toxina botulinica".
                     <span className="font18">(Frevert J. Drugs R D 2010;10:67-73.)</span>
                     </p>
                  </div>
               </div>
               <div className="row col-12 XeominBlue justify-content-center XtractBox">
                  <p className="col-12 XeominLabFinalText RaleWayBold font32">
                     <b>El complejo proteico es simplemente una impureza</b>
                  </p>
                  <img className="XtractPic" src="/assets/img/Pics/Xtract.png" alt="Xtract" />
                  <p style={{textAlign:"center"}}>
                     <b className="RalewayBold">XTRACT TECHNOLOGY: </b>
                        PROCESO DE MANUFACTURA Y PRODUCCIÓN
                  </p>
               </div>

               <div className="XtractVideo row col-12 justify-content-center">
                  <div className="col-5 Raleway font40">
                  </div>
                  <iframe title="vimeo-player" src="https://player.vimeo.com/video/528570742" width="640" height="360" frameborder="0" allowfullscreen></iframe>
               </div>
               <div className="container col-12 justify-content-center">
               <div className="row col-12" style={{margin:"5% 0%"}}>
                  <div className="col-2" style={{padding:"0%"}}>
                     <img className="ToxinaBlue2" src="/assets/img/Pics/ToxinaBlue.png" alt="toxin" />
                  </div>
                  <div className="col-10" style={{paddingRight:"0%"}}>
                     <p className="XeominBlue Raleway font24">
                        A través del proceso XTRACT Technology se consigue remover el complejo proteico, obteniendo una neurotoxina activa (150kDA) purificada que ofrece un menor riesgo de inmunogenicidad y una alta estabilidad.
                     </p>
                     <p className="font18">
                        J Drugs Dermatol. 2019; 18 (1) : 52-57. S.K. Sharma. Toxicon 41 (2003) 321-331
                     </p>
                  </div>
               </div>
               </div>
               <div className="row col-12 justify-content-center XeoRecBox">
                  <div className="col-12">
                     <p className="XeominBlue XeominRec Raleway font32">
                        <b className="RalewayBold font40">XEOMIN<span className="trademark">&#174;</span>: </b>
                        RECONSTITUCIÓN Y DILUCIÓN
                     </p>
                  </div>
                  <div className="col-12 XeominRecText">
                     <p className="XeominBlue RalewayBold font32">
                        <b>
                           puede ayudarlo a alcanzar el efecto deseado en sus pacientes.
                        </b>
                     </p>
                     <p className="XeominBlue font18">
                        XEOMIN<span className="trademark">&#174;</span> (incobotulinumtoxinaA) Summary of Product Characteristics. MerzPharmaceuticals GmbH.
                     </p>
                  </div>
               </div>
               <div className="row col-12">
                  <div className="col-9 Raleway font24">
                     <p>
                        El resultado final <span className="XeominBlue"> dependerá de la dosis y la técnica utilizada.</span>
                        La dosis óptima en el plano adecuado y con la cantidad necesaria de puntos de aplicación las determina de manera individualizada el médico tratante.
                        <span className="XeominBlue">Pueden existir variaciones </span> en cada paciente de acuerdo a su <span className="XeominBlue"> patrón de contracción y fuerza muscular, entre otros.</span>
                        <span className="XeominBlue">No existe una técnica única de aplicación </span> que funcione para todos los médicos y pacientes.
                     </p>
                     <p className="XeominBlue XeominStepsTitle RalewayBold font32">
                     PASOS PARA UNA ADECUADA RECONSTITUCIÓN DE XEOMIN
                  </p>
                  </div>
                  <div className="col-3">
                     <img className="XeominVialPic" src="/assets/img/Pics/XeominVial.png" alt="" />
                  </div>
               </div>
               <div className="XeominStepsBox">
                  
                  <div className="row col-12 font24" style={{margin:"0%"}}>
                     <div className="col-5">
                        <p className="XeominBlue Paso1Text RalewayBold font32">Paso 1:</p>
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
                        <p className="XeominTipsText">
                        <span className="XeominTipsDot"></span>
                           Debido al proceso de sellado al vacio de XEOMIN<span className="trademark">&#174;</span>, la solución salina deberá ser aspirada al interior del vial por si sola.</p>
                     </div>
                     <div className="col-7 Raleway">
                        <p className="XeominBlue RalewayBold">Paso 2:</p>
                        <p className="Paso2Text">Retire la aguja y realice movimientos circulares dejando que el liquido toque todas las paredes del vial y el tapón de goma, y regrese a su posición inicial, repitiendo estos movimientos varias veces hasta lograr una mezcla homogénea.</p>
                     </div>
                     <div className="col-5" style={{padding:"0%"}}>
                        <img className="Paso2Pic" src="/assets/img/Pics/Paso2.png" alt="Paso 2" />
                     </div>
                     <div className="col-12 XeominImportant XeominBlue RalewayMedium">
                           <p>
                              IMPORTANTE:
                           </p>
                           <p>
                              El frasco no debe ser agitado vigorosamente.
                           </p>
                        </div>
                        <div className="col-7 XeominTips Raleway">
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
                     <div className="col-5" style={{padding:"0%"}}>
                        <img className="Paso3Pic" src="/assets/img/Pics/Paso3.png" alt="Paso 3" />
                     </div>
                  </div>
                  <div className="VideoReconstitucion">
                     <div className="col-12 Raleway font40 XeominBlue">
                        <p>
                           Video Reconstitución
                        </p>
                     </div>
                     <div className="col-12">
                     <iframe title="vimeo-player" src="https://player.vimeo.com/video/528571892" frameborder="0" allowfullscreen></iframe>
                     </div>
                  </div>
                  <div className="col-12 justify-content-around">
                        <img className="One21Pic" src="/assets/img/Pics/One21.png" alt="one21" />
                     </div>
                  <div className="XeoTechnique row col-12 justify-content-center">
                     <p className="XeominBlue col-12 Raleway font32">
                        DESTÁQUESE CON UNA <b>TÉCNICA PERSONALIZADA</b>
                     </p>
                  </div>
                  <div className="row col-12 justify-content-center One21Box">
                     <div className="col-12 Raleway font24 One21Text">
                        <p>
                           <b className="RalewayBold One21Full">one<span className="One21">2</span>1</b> es una exclusiva técnica que apunta a un tratamiento individualizado para el modelamiento de las cejas, tratamiento de arrugas frontales, glabelares y perioculares, basada en la anatomía y los resultados deseados por los pacientes.
                        </p>
                     </div>
                  </div>
                  <img className="ProtocolMov" src="/assets/img/Pics/ProtocoloMov.png" alt="Protocolo" />
                  <div className="VideoONE21 row justify-content-center">
                     <div className="col-12 Raleway font24">
                        <p className="VideoONETitle">Video One21 - Dra. Barrera</p>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/528575563" frameborder="0" allowfullscreen></iframe>
                     </div>
                     <div className="container Raleway">
                     <p className="XeominBlue XeoDownloadText font24">
                        Si desea conocer más de esta técnica descargue la guía paso a paso
                     </p>
                     <Link className="XeoDownloadBTN"  to={{pathname:"/assets/pdf/GUIIATECNICAPASOAPASO.pdf"}} target="_blank" >
                        Descargar
                     </Link>
                     </div>
                  </div>
                  
               </div>
            </div>
         </div>
      );
   }
}