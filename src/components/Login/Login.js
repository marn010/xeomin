import React, { useState } from 'react';

import './Login.css';

export default function Login({setToken}){
   const [password,setPassword] = useState();
   /* const pass = 'jZae727K08KaOmKSgOaGzww/XVqGr/PKEgIMkjrcbJI='; */
   const pass= 'TjCCgDgNSrWlQmnZVkApcryjZwdpncIR4DyPGvWibB4=';
   var crypto = require('crypto');
   const handleSubmit = async e=> {
      e.preventDefault();
      const hash = crypto.createHash('sha256').update(password).digest('base64');
      alert("La clave ingresada fue: " + password);
      alert("El Hash producido es: " + hash);
      if(hash===pass){
         setToken({token:pass})
         /* alert("codigo aceptado") */
      }else{
         alert("El código ingresado no corresponde con nuestra base de datos.")
      }
   }
   return(
      <div className="loginBox">
         <div className="MainLogBox">
            <h1>¡BIENVENIDO!</h1>
            <div className="FormBox">
               <form onSubmit={handleSubmit}>
                  <label className="Raleway">
                     <p><b>Ingrese el código</b> de acceso para conocer y vivir una experiencia única</p>
                     <input type="password" onChange={e => setPassword(e.target.value)} />
                  </label>
                  <div>
                     <button type="submit">Submit</button>
                  </div>
               </form>
            </div>
         </div>
         <img className="ColorsLog" src="/assets/img/Pics/LogoHome.png" alt="" />
         <p className="LoginExclusiveText">
            Contenido exclusivo para cuerpo médico
         </p>
      </div>
   )
}

