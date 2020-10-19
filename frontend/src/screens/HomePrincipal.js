import React, { Component } from "react";
import "../Shopping.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Layout from "../Layout/Layout";
import Zoom from "react-reveal/Zoom";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/ProductActions";
import { addToCart } from "../actions/CartActions";
import Modal from "react-modal";
import Promociones from "../components/Promociones";

class HomePrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    /**Galeria img Nuestro juego */
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2500,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="fondo-cancha">
        <Layout>
          <br />
          <br />
          <h1 className="centrado titulo ">MEJORÁ TU JUEGO </h1>
          <br />
          <br />


          <header>
            <img
              src="/imagenes/banner.png"
              className="banner"
              alt="publicidad"
            />
          </header>

          <div>
            <h2 className="centrar">PROMOCIONES</h2>
            <Promociones />
          </div>

          <br />
          <br />
          <Link to="/shopping">
            <button className="button-red-promociones"> VER TODO </button>
          </Link>
          <br />

          <hr />
          <div className="container-menu-redondos">
            <Link to="/apoyanos" className="iconos-redondos">
              <img
                src="/imagenes/apoyanos-1.png"
                className="iconos-redondos"
                alt="apóyanos"
              />
            </Link>
            <Link to="/shopping" className="iconos-redondos">
              <img
                src="/imagenes/shopping-1.png"
                className="boton-fiscalizacion-2"
                alt="shopping"
              />
            </Link>
            <Link to="/mejora-tu-juego" className="iconos-redondos">
              <img
                src="/imagenes/rendimiento-1.png"
                className="iconos-redondos"
                alt="contenido técnico de fútbol"
              />
            </Link>
          </div>
          <hr />

          <h2 className="centrar">NUESTRO JUEGO</h2>

          <p className="centrar">
     
            Lorem Ipsum is simply dummy text of the printing
            <br /> and typesetting industry. Lorem Ipsum has
          </p>
          <Slider {...settings}>
            <img
              src="/imagenes/fotos-3.png"
              className="img-testimonial"
              alt="publicidad"
            />
            <img
              src="/imagenes/fotos-3.png"
              className="img-testimonial"
              alt="publicidad"
            />
            <img
              src="/imagenes/fotos-3.png"
              className="img-testimonial"
              alt="publicidad"
            />
            <img
              src="/imagenes/fotos-4.png"
              className="img-testimonial"
              alt="publicidad"
            />
          </Slider>
          <div className="testimonial ">
            <blockquote>
              <p className="centrar">
                <img
                  src="/imagenes/comillas.png"
                  alt="comillas"
                  className="icon-logo-c"
                />
                Rápido significa lento pero sin pausa
                <img
                  src="/imagenes/cita.png"
                  alt="comillas"
                  className="icon-logo-c"
                />{" "}
                <br /> Fernando Jubero
              </p>
            </blockquote>
          </div>

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

                    <p>${product.description}</p>

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
                              Crear tu cuenta, o inicia sesión directamente si
                              ya tienes una;
                            </p>
                          </li>
                          <li>
                            <p>Elije el método de pago de tu preferencia</p>
                          </li>
                          <li>
                            <p>Disfruta del Fútbol Total</p>
                          </li>
                        </ol>
                        <button className="button-red-forms">Comprar</button>
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
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Modal>
          )}


        </Layout>
      </div>
    );
  }
}

export default connect((state) => ({ products: state.products.Items }), {
  fetchProducts,
  addToCart,
})(HomePrincipal);
