
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/CartActions';


function Payment(props) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [tigoMethod, setTigoMethod] = useState('');
  const [personalMethod, setPersonalMethod] =useState ('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('order');
  };
  const submitHandler1 = (e) => {
    e.preventDefault();
    dispatch(savePayment({ tigoMethod }));
    props.history.push('order');
  };
  const submitHandler2 = (e) => {
    e.preventDefault();
    dispatch(savePayment({ personalMethod }));
    props.history.push('order');
  };
  return (
    <div className='login'>
  <Link to="/"> <button className="close-modal" >
                  X
                </button></Link>
                <hr/>
      <div className="form">
        <form onSubmit={submitHandler} className='container-login-form'>
        <div className="form-container">
        <h1>¿DONDE QUIERES PAGAR?</h1>
        <br/><br/>
      <div className="container-pagos">
            
    <div>
    <button className="m-pagos" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}>
    <img for="personalMethod" src='/imagenes/paypal.png'className="pagos-paypal" alt="paypal" />
    </button>
    </div>
    <hr/>

    <div>
    <button className="m-pagos" name="tigoMethod" id="tigoMethod" value="tigo" onChange={(e) => setTigoMethod(e.target.value)}>
    <img for="tigoMethod" src='/imagenes/tigo-money.jpg'className="pagos-paypal" alt="tigo money" />
    </button>
    </div>
    <hr/>

    <div>
    <button className="m-pagos" name="personalMethod" id="personalMethod" value="personal" onChange={(e) => setPersonalMethod(e.target.value)}>
    <img for="personalMethod" src='/imagenes/billetera-personal.jpg'className="pagos-paypal" alt="billetera personal" />
    </button>
    </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Payment;