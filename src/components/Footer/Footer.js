import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Forms from '../Form/Form';
import Social from '../Social/Social';
import { Animate, AnimateKeyframes  } from 'react-simple-animate';
import './Footer.css'

export default class Footer extends Component{
   render(){
      let hScreen= this.props.hScreen;
      return(
         <React.Fragment>
            <Social/>
            
            <div className="MainBox">
               <div className="MainWebBox container">
                  <div className="container">
                     <img className="X" src="/assets/img/Background/X.svg" alt="X" />
                     <AnimateKeyframes
                        play
                        iterationCount="3"
                        direction="normal"
                        easeType="ease-in"
                        delay={1}
                        duration={5}
                        keyframes={[
                           { 0: "transform-origin: 0 100%; opacity: 0.8"},
                           {
                              50: "transform-origin: 0 100%; transform:scale(1.05)"
                           },
                           { 100: "transform-origin: 0 100%; opacity: 1"},
                        ]}
                     >
                     <div className="row justify-content-center Raleway font24">
                        <div className="col-6">
                           <img className="pencilPic" src="/assets/img/Pics/pencil.svg" alt="pencil" />
                           <p className="pencilText">Si está interesado en que sus pacientes vivan una experiencia como la de Carolina, <b className="RalewayBold"> diligencie el siguiente formulario </b>para recibir una muestra de producto. </p>
                        </div>
                        <div className="col-6 font18">
                           <Forms hScreen={hScreen}/>
                        </div>
                     </div>
                     </AnimateKeyframes >
                  </div>
               </div>
               <div className="MainMovBox">
                  <div className="container col-12 ">
                     <div className="col-12 justify-content-center Raleway">
                        <div className="col-12">
                           <img className="pencilPic" src="/assets/img/Pics/pencil.svg" alt="pencil" />
                           <p className="pencilText">Si está interesado en que sus pacientes vivan una experiencia como la de Carolina, <b className="RalewayBold"> diligencie el siguiente formulario </b> para recibir una muestra de producto.</p>
                        </div>
                        <div className="col-12">
                           <Forms hScreen={hScreen}/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
               <div className="RegInvima container Raleway font18">
                  <div className="row col-12 justify-content-center">
                     <Link to="/invima">
                        <p>
                           Registro sanitario INVIMA
                        </p>
                     </Link>
                  </div>
               </div>
               <div className="MERZBox font21">
                  <img className="EndForm" src="/assets/img/Pics/EndForm.png" alt="" />
                  <p>Merz Colombia S.A.S. Carrera 11 No. 87-51 Oficina. 302 - Teléfono: +57 1 3904707<br/>
                  <span>
                     Email: servicioalcliente@merz.com - Bogotá Colombia
                     </span>
                  </p>
               </div>
               
         </React.Fragment>
      );
   }
}