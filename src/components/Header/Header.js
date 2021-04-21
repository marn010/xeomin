import React, { Component } from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';
import './Header.css'

export default class Header extends Component{
   render(){
      return(
         <React.Fragment>
            <AnimateGroup play>
            <div className="MainHeaderBox">
               {/* <img className="HeaderPic" src="/assets/img/Pics/Header.png" 
               alt="" /> */}
               <img className="HeaderPic" src="/assets/img/Pics/Header.png" 
               alt="" />
               <img className="HeaderMovPic" src="/assets/img/Pics/HeaderMov.png" alt="" />
               <div className="TestimonyVid Raleway font32">
                  <div className="TestimonyBox">
                     <div className="TestimonyTextBox">
                        <p className="TestimonyText">
                        <Animate
                           start={{
                              opacity:"0.2",
                              transform:"translateX(-200px)"
                           }}
                           end={{
                              opacity:"1.0",
                              transform:"translateX(0px)"
                           }}
                           duration={1.8}
                           sequenceIndex={0}
                        >
                           <b className="Raleway ">
                              Testimonio personal </b> 
                            de Carolina Aristizábal
                        </Animate>
                        </p>
                     </div>
                     <div className="TestimonyVideoBox">
                        <Animate
                           start={{
                              opacity:"0.3",
                           }}
                           end={{
                              opacity:"1.0",
                           }}
                           duration={1.8}
                           sequenceIndex={0}
                        >
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/539871734" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        {/* <iframe title="vimeo-player" src="https://player.vimeo.com/video/529064794" className="VidCarolina "   frameborder="0" allowfullscreen></iframe> */}
                        </Animate>
                     </div>
                  </div>
               </div>
               <div className="TestimonyMovVid Raleway font32">
                  <div className="TestimonyBox">
                     <div className="TestimonyTextBox">
                        <p className="TestimonyText">
                           <b className="Raleway ">
                              Testimonio personal </b> 
                            de Carolina Aristizábal
                        </p>
                     </div>
                     <div className="TestimonyVideoBox">
                        
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/529064794" className="VidCarolina " /* width="640" height="360" */ frameborder="0" allowfullscreen></iframe>
                        
                     </div>
                  </div>
               </div>
            </div>
            </AnimateGroup>
         </React.Fragment>
      );
   }
}