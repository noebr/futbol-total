import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import "../Shopping.css";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/ProductActions";
import { addToCart } from "../actions/CartActions";
import Slider from "react-slick";
import Promociones from "../components/Promociones";
import Modal1 from "../components/Modal1";
import Modal2 from "../components/Modal2";
import Modal3 from "../components/Modal3";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
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
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="promociones">
          <h2 className="color-white">PROMOCIONES</h2>
          <Promociones />
          <br />
          <br />
        </div>

        <h2>NIVEL INICIAL</h2>
        <Fade bottom cascade={true}>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <Slider {...settings}>
              {this.props.products.map((product) => (
                <li key={product._id}>
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
                    <Link
                      className="link-name"
                      to={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      Ver más...{" "}
                    </Link>
                    <div className="product-price">${product.price}</div>
                    <br />
                    <Modal3 />
                    <br />
                    <br />
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button-transparente-ac"
                    >
                      <img
                        src="/imagenes/carrito-8.png"
                        alt="carrito"
                        className="carrito"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </Slider>
          )}
        </Fade>

        <h2>NIVEL INTERMEDIO</h2>
        <Fade bottom cascade={true}>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <Slider {...settings}>
              {this.props.products.map((product) => (
                <li key={product._id}>
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
                    <Link
                      className="link-name"
                      to={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      Ver más...{" "}
                    </Link>
                    <div className="product-price">${product.price}</div>
                    <br />
                    <Modal3 />
                    <br />
                    <br />
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button-transparente-ac"
                    >
                      <img
                        src="/imagenes/carrito-8.png"
                        alt="carrito"
                        className="carrito"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </Slider>
          )}
        </Fade>

        <h2>NIVEL AVANZADO</h2>
        <Fade bottom cascade={true}>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <Slider {...settings}>
              {this.props.products.map((product) => (
                <li key={product._id}>
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
                    <Link
                      className="link-name"
                      to={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      Ver más...{" "}
                    </Link>
                    <div className="product-price">${product.price}</div>
                    <br />
                    <Modal3 />
                    <br />
                    <br />
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button-transparente-ac"
                    >
                      <img
                        src="/imagenes/carrito-8.png"
                        alt="carrito"
                        className="carrito"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </Slider>
          )}
        </Fade>

        <h2>NIVEL PROFESIONAL</h2>
        <Fade bottom cascade={true}>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <Slider {...settings}>
              {this.props.products.map((product) => (
                <li key={product._id}>
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
                    <Link
                      className="link-name"
                      to={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      Ver más...{" "}
                    </Link>
                    <div className="product-price">${product.price}</div>
                    <br />
                    <Modal3 />
                    <br />
                    <br />
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button-transparente-ac"
                    >
                      <img
                        src="/imagenes/carrito-8.png"
                        alt="carrito"
                        className="carrito"
                      />
                    </button>
                  </div>
                </li>
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
              &times;
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

                    <p className="centrar product-price-details">TOTAL: ${product.price}</p>

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
)(Products);
