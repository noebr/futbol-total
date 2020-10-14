import { useHistory } from "react-router-dom";
import React from "react";
import "../Shopping.css";

function Modal2() {
  const history = useHistory();
  return (
    <button
      className="button-red-forms"
      onClick={() => history.push("/signin?redirect=facturacion")}
    >
      Comprar
    </button>
  );
}
export default Modal2;
