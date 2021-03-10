import React, { useState } from 'react';

import './Login.css';

export default function Login({setToken}){
   const [password,setPassword] = useState();
   const pass= '123456';
   const handleSubmit = async e=> {
      e.preventDefault();
      /* alert("La clave ingresada fue: " + password) */
      if(password===pass){
         setToken(1)
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
                  <label>
                     <p><b>Ingrese el código</b> de acceso para conocer y vivir una experiencia única</p>
                     <input type="password" onChange={e => setPassword(e.target.value)} />
                  </label>
                  <div>
                     <button type="submit">Submit</button>
                  </div>
               </form>
            </div>
         </div>
         <hr/>
         <img className="ColorsLog" src="/assets/img/Pics/ColorsLog.png" alt="" />
      </div>
   )
}