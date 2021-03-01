import React, { Component } from 'react';

import './Xeomin.css';

export default class XeominWeb extends Component{
   render(){
      return(
         <div className="XeominMainWebBox">
            <div>
               <img src="/assets/img/Background/XeominMain.png" alt="Xeomin" />
            </div>
            <div className="container col-12">
               <div className="row col-12">
                  <div className="col-1">
                  </div>
                  <div className="col-10 justify-content-center XeominText">
                     <div>
                        <p className="XeominTitle"><b>XEOMIN</b> ES PARTE DE LA INVESTIGACIÓN DE TODA UNA VIDA</p>
                        <p>
                           Hace casi 20 años, el Dr. Frevert se dio cuenta que el complejo proteico que rodea el núcleo de neurotoxinas no es necesario para su efecto terapéutico o modo de acción
                        </p>
                        <div className="row col-12 justify-content-center">
                           <div className="col-5">
                              <p>
                                 "El complejo proteico que forma parte de una toxina botulinica es simplemente una impureza", explica el Dr. Frevert.
                              </p>
                           </div>
                           <div className="col-5">
                              <p>
                                 Descubrio que solo se requeria la proteina responsable de la actiuvidad farmacológica, la neurotoxina en su estado puro
                              </p>
                           </div>
                        </div>
                        <p>"Sabia que el complejo proteico puede estimular el sistema inmunológico para producir anticuerpos que neutralizan la neurotoxina", reveló</p>
                     </div>
                  </div>
                  <div className="col-1">
                  </div>
               </div>
               <div className="DrFrevert">
                  <div className="row col-12">
                     <div className="col-4">
                        <img src="" alt="DrFrevert" />
                     </div>
                     <div className="col-8">
                        <p>
                           El Dr. Jurgen Frevert podria ser descrito como el padre de XEOMIN.
                        </p>
                        <p>
                           Hace más de 30 años, el Dr. formaba parte de una investigfacion doctoral y se le encomendó <b>purificar</b> la toxina botulinica tipo A con la que trabajaba en ese momento (Onabotulinim Toxin A).
                        </p>
                     </div>
                  </div>
               </div>
               <div className="">
                  <p>
                     Hacia finales de la década de 1990, comenzó el proyecto que dio como resultado XEOMIN. Realizando fermentaciones durante la semana, el Dr. Frevert pasó muchos fines de semana con colegas igualmente dedicados a purificar y experimentar nuevas formas de estabilizar la neurotoxina y descubrió que la sacarosa era el excipiente más efectivo en este sentido.
                  </p>
               </div>
               <div className="row col-12">
                  <div className="col-3">

                  </div>
                  <div className="col-9">
                     <p>
                        "Como cientifico, bioquímico, es muy satisfactorio haber desarrollado un producto, con mis propias manos".
                     </p>
                  </div>
               </div>
               <div className="row col-12">
                  <div className="col-5">
                     <img src="" alt="" />
                  </div>
                  <div className="col-7">
                     <p>
                        XEOMIN es un producto de alta calidad: de todos los pacientes tratados hasta la fecha <span> ninguno ha desarrollado anticuerpos neutralizantes o se ha convertido en no respondedores secundarios </span>, lo que permite a los pacientes beneficiarse de tratamientos repetidos.
                     </p>
                     <p>
                        No solo la neurotoxina es la única proteina bacteriana presente en cada vial de las diferentes preparaciuones de toxina botulinica disponibles en el mercado; XEOMIN a través de su proceso de manufaftura y fabricación tan perfectamente controlado, <span>logra extraer la neurotoxina purificada sin perder su actividad biológica.</span>
                     </p>
                     <p>
                        Esto significa que, si bien hay una menor carga proteica en el vial, <span>XEOMIN al contener unicamente la neurotixina purificada tiene la mayor potencia específica </span> en comparación con otros productos de toxina botulinica".
                     </p>
                     <p>(Frevert J. Drugs R D 2010;10:67-73.)</p>
                  </div>
               </div>
               <div className="row col-12 justify-content-center">
                  <p className="col-12">
                     El complejo proteico es simplemente una impureza
                  </p>
                  <img src="" alt="Xtract" />
               </div>
               <div className="row col-12">
                  <div className="col-3">
                     <img src="" alt="toxin" />
                  </div>
                  <div className="col-9">
                     <p>
                        A través del proceso XTRACT TEchnology se consigue remover el complejo proteico, obteniendo una neurotoxina activa (150kDA) purificada que ofrece un menor riesgo de inmunogenicidad y una alta estabilidad.
                     </p>
                     <p>
                        J Drugs Dermatol. 2019; 18 (1) : 52-57. S.K. Sharma. Toxicon 41 (2003) 321-331
                     </p>
                  </div>
               </div>
               <div className="row -col12">
                  <div className="col-5">
                     <p>
                        <b>XEOMIN:</b>
                        RECONSTITUCIÓN Y DILUCIÓN
                     </p>
                  </div>
                  <div className="col-7">
                     <p>
                        XEOMIN puede ayudarlo a alcanzar el efecto deseado en sus pacientes.
                     </p>
                     <p>
                        XEOMIN (incobotulinumtoxinaA) Summary of Product Characteristics. MerzPharmaceuticals GmbH.
                     </p>
                  </div>
               </div>
               <div className="row col-12">
                  <div className="col-3">
                     <img src="" alt="" />
                  </div>
                  <div className="col-9">
                     <p>
                        Elk resultado final <span> dependerá de la dosis y la técnica utilizada.</span>
                     </p>
                     <p>
                        La dosis óptima en el plano adecuado y con la cantidad necesaria de puntos de aplicación las determina de manera individualizada el médico tratante.
                     </p>
                     <p>
                        <span>Pueden existir variaciones </span> en cada paciente de acuerdo a su <span> patrón de contracción y fuerza muscular, entre otros.</span>
                     </p>
                     <p>
                        <span>No existe una técnica única de aplicación </span> que funcione para todos los médicos y pacientes.
                     </p>
                  </div>

               </div>
            </div>
         </div>
      );
   }
}