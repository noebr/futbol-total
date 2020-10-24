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
import MiEspacio from "../Layout/MiEspacio";

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
      speed: 2000,
      autoplaySpeed: 2000,
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
          <MiEspacio />
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
          <br />
          <br />

          <Link to="/shopping">
            <button className="button-red-promociones"> Ver todo </button>
          </Link>
          <br />
          <br />
          <br />

          <hr />
          <div className="container-menu-redondos">
            <Link to="/apoyanos" className="iconos-redondos">
              <img
                src="/imagenes/mejora.png"
               
                className="iconos-redondos"
                alt="apóyanos"
              />
            </Link>
            <Link to="/shopping" className="iconos-redondos">
              <img
                src="/imagenes/shopping-1-1.png"
                className="iconos-redondos-1"
                alt="shopping"
              />
            </Link>
            <Link to="/mejora-tu-juego" className="iconos-redondos">
              <img
                 src="/imagenes/apoyanos.png"
                className="iconos-redondos"
                alt="contenido técnico de fútbol"
              />
            </Link>
          </div>
          <hr />

          <h2 className="centrar">NUESTRO JUEGO</h2>

          <p className="centrar nuestro-juego">
           
            Creemos en el fútbol como una herramienta de desarrollo individual,
            social y económico. A través de nuestra secuencia con videos de
            contenido pedagógico para el dominio del balón; podrás aprender a
            divertirte con la pelota, mediante el desarrollo de tus habilidades
            que apunten a tener un buen 1 vs. 1 y así ganar en confianza al
            momento de jugar el fútbol con tus amigos.
          </p>
          <br/><br/><br/>
          <Slider {...settings}>
            <img
              src="/imagenes/nuestros-juego1.jpg"
              className="img-testimonial"
              alt="Charla en la Escuela Nacional de Educación Física
              (Gobernación de Cordillera) sobre Nutrigenética y nutrigenómica en el fútbol"
            />
            <img
              src="/imagenes/nuestros-juego2.jpg"
              className="img-testimonial"
              alt="Colonia de Vacaciones de Fútbol Total en alianza con la Secretaria
               Nacional de Deportes-Charlas"
            />
            <img
              src="/imagenes/nuestros-juego3.jpg"
              className="img-testimonial"
              alt="Colonia de Vacaciones de Fútbol Total en alianza con la Secretaria Nacional de Deportes"
            />
            <img
              src="/imagenes/nuestros-juego4.jpg"
              className="img-testimonial"
              alt="Colonia de Vacaciones de Fútbol Total en alianza
               con la Secretaria Nacional de Deportes-Entrenamientos"
            />
            <img
              src="/imagenes/nuestros-juego5.PNG"
              className="img-testimonial"
              alt="Preparativos para la plataforma de Futbol Total"
            />
            <img
              src="/imagenes/nuestros-juego6.jpg"
              className="img-testimonial"
              alt="Proyecto Estación de Innovación - Barrio Chaipé Encarnación - Eje Deporte Inclusivo"
            />
            <img
              src="/imagenes/nuestros-juego7.PNG"
              className="img-testimonial"
              alt="Proyecto Fútbol Total-Visita de la selección 
              Suiza de Beach Soccer al Bañado Sur,Asunción Paraguay. Juego"
            />

            <img
              src="/imagenes/nuestros-juego8.PNG"
              className="img-testimonial"
              alt="Proyecto Fútbol Total-Visita de la selección Suiza de Beach Soccer 
              al Bañado Sur,Asunción Paraguay"
            />
            <img
              src="/imagenes/nuestros-juego9.jpg"
              className="img-testimonial"
              alt="Reunión con la Liga Encarnacena de Futbol intercambiando experiencias."
            />
          </Slider>
          <div className="testimonial ">
            <h2>TESTIMONIO</h2>
           
              <p className="texto-t">
                <img
                  src="/imagenes/comillas1.png"
                  alt=""
                  className="icon-logo-c"
                />
                Rápido significa lento pero sin pausa
{" "}
              </p>

              <p className="testimonio-f">-FERNANDO JUBERO </p>
           
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
                        Descripción:{" "}
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
