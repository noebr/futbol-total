import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { savePayment } from "../actions/CartActions";

function Payment(props) {
  const cart = useSelector((state) => state.cart);
  const { facturacion } = cart;
  if (!facturacion.nombre) {
    props.history.push('/facturacion');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(paymentMethod));
    props.history.push('/placeorder');
  };

  return (
    <div className="login">
      <Link to="/">
        {" "}
        <button className="close-modal">&times;</button>
      </Link>
      <hr />
      <div className="form">
        <form onSubmit={submitHandler} className="container-login-form">
          <div className="form-container">
            <h1>¿DONDE QUIERES PAGAR?</h1>
            <br />
            <br />
            <div className="container-pagos">
              <div>
                <button
                  className="m-pagos"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <img
                    htmlFor="personalMethod"
                    src="/imagenes/paypal.png"
                    className="pagos-paypal"
                    alt="paypal"
                  />
                </button>
              </div>
              <hr />

              <div>
              <button
                  className="m-pagos"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <img
                   htmlFor="tigoMethod"
                    src="/imagenes/FT3-23.png"
                    className="pagos-money"
                    alt="tigo money"
                  />
                </button>
              </div>
              <hr />

              <div>
              <button
                  className="m-pagos"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <img
                    htmlFor="personalMethod"
                    src="/imagenes/FT3-24.png"
                    className="pagos-personal"
                    alt="billetera personal"
                  />
                </button>
                <hr />
                <div>
                <button
                  className="m-pagos"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <img
                   htmlFor="tigoMethod"
                    src="/imagenes/FT3-25.png"
                    className="pagos-transf"
                    alt="tigo money"
                  />
                </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Payment;
