import React, { Component } from "react";
import formatCurrency from "../components/Util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";


import { removeFromCart } from "../actions/CartActions";


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };

  render() {
    const { cartItems, order } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart-cart-header"><p>El carrito esta vacío</p></div>
        ) : (
          <div className="cart-cart-header">
           <p> Tienes {cartItems.length} productos en el carrito{" "}</p>
            <br/><br/><br/>
          </div>
        )}

        {order && (
          
            <Zoom>
            
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
       
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                    <img src={item.image} alt={item.name}></img>
                    </div>
                    <div>
                    <p className="color-orange">{item.name}</p>
                    </div>

                    <div className="cart-price">
                    <p>{formatCurrency(item.price)} </p>
                    </div>
                      <div className="cart-price-tachito">
                     
                        <button
                          className="cart-button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                        <img src="./imagenes/FT3-18.png" className="redes-sociales-basura" alt="eliminar"/>
                        </button>
                      
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
        
          {cartItems.length !== 0 && (
            <div>

              {this.state.showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form onSubmit={this.createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect ((state) =>({
cartItems : state.cart.cartItems,
}),
{ removeFromCart}
)(Cart);