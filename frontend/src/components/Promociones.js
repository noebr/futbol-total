import React, { Component } from "react";
import "../Shopping.css";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/ProductActions";
import { addToCart } from "../actions/CartActions";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import HomeCompra from "../screens/HomeCompra";
import Modal1 from "../components/Modal1";
import Modal2 from "../components/Modal2";

class Promociones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      showCheckout: false,
    };
  }

  componentWillMount() {
    Modal.setAppElement("body");
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const checkoutHandler = () => {
      this.props.history.push("/signin?redirect=facturacion");
    };

    const { product } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Fade bottom cascade>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <Slider {...settings}>
              {this.props.products.map((product) => (
                <div key={product._id}>
                  <div className="carrito">
                    <div className="product">
                      <div className="product-name">
                        <p>{product.name}</p>
                      </div>
                      <Link
                        className="link-name"
                        to={"#" + product._id}
                        onClick={() => this.openModal(product)}
                      >
                        <img
                          className="product-image"
                          src={product.image}
                          alt={product.name}
                        />
                      </Link>
                      <br />
                      <div className="product-brand">{product.brand}</div>
                    </div>
                    <Link
                      className="link-name"
                      to={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      Ver más...{" "}
                    </Link>

                    <div className="product-price">${product.price}</div>
                    <br />
                    <Modal1 />
                    <br />
                    <br />
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button-transparente-promociones"
                    >
                      Agregar al carrito
                    </button>
                    <br />
                    <br />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </Fade>
        {product && (
          <Modal
            className="my-modal"
            isOpen={true}
            onRequestClose={this.closeModal}
          >
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                X
              </button>
              <hr />
              <div className="product-details">
                <img src={product.image} alt={product.name}></img>
                <div className="product-details-description">
                  <h2>
                    <strong>
                      {product.name}
                      <br />
                      DESCRIPCION:{" "}
                    </strong>
                  </h2>
                  <div className="datos-forms">
                    <p>${product.description}</p>
                  </div>
                  <div className="product-price">
                    <hr />
                    <h1 className="centrar">RESUMEN</h1>

                    <p className=" centrar price">${product.price}</p>

                    <hr />
                    <div>
                      <h1 className="centrado">
                        PASOS PARA QUE TU FÚTBOL SEA TOTAL
                      </h1>
                      <ol className="ol">
                        <li>
                          <p>
                            Presiona el botón comprar o seguí agregardo al
                            carrito;
                          </p>
                        </li>
                        <li>
                          <p>
                            Crear tu cuenta, o inicia sesión directamente si ya
                            tienes una;
                          </p>
                        </li>
                        <li>
                          <p>Elije el método de pago de tu preferencia</p>
                        </li>
                        <li>
                          <p>Disfruta del Fútbol Total</p>
                        </li>
                      </ol>
                      <br />
                      <br />
                      <Modal2 />
                      <br />
                      <br />
                      <button
                        className="button-transparente-forms"
                        onClick={() => {
                          this.props.addToCart(product);
                          this.closeModal();
                        }}
                      >
                        Agregar al carrito
                      </button>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Promociones);
