import { useHistory } from 'react-router-dom';
import React from 'react';
import '../Shopping.css';

function Modal1 () {
  const history = useHistory();
  return <button className="button-red-promociones" onClick={() => history.push("/signin?redirect=facturacion")}>
      Comprar
  </button>;
}
export default Modal1;