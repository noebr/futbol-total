import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import '../Shopping.css';

function Boton () {
  const history = useHistory();
  return <Link className="boton-flecha" onClick={() => history.goBack(-1)}>
      <img src='/imagenes/FT3-27.png'className="logo-atras" alt="fundacion proinso" />
  </Link>;
}
export default Boton;