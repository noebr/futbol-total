import React from 'react';
import "../Shopping.css";
import FacebookLogin from 'react-facebook-login';
 
function Facebook() {
    const respuestaFacebook = (respuesta) => {
        console.log(respuesta.name);
        console.log(respuesta.email);
        console.log(respuesta.picture.data.url);
      }
      return(
        <FacebookLogin
        cssClass="button-azul-redes"
        appId="351535432628365"
        autoLoad={false}
        fields="name,email,picture"
        callback={respuestaFacebook} 
        icon="fa fa-facebook-official"
        textButton="  Continuar con Facebook"/>
 


      );


}

export default Facebook;