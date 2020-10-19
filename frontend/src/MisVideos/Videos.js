import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import '../Shopping.css';
import { connect } from "react-redux";

import{ fetchVideos} from "../actions/videosActions";

import Slider from "react-slick";
import ReactPlayer from 'react-player';




class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    this.props.fetchVideos();
  }
  componentWillMount() {
    Modal.setAppElement('body');
}
  openModal = (video) => {
    this.setState({ video });
  };
  closeModal = () => {
    this.setState({ video: null });
  };

  render() {
    const { video } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      arrows: false,

    };
    
    return (
      
      <div>
 <h1>MIS VIDEOS</h1>
 
 <Slider{...settings} >
 <div className="container-videos">
 
        
        <Fade bottom cascade={true}>
          
          {!this.props.videos ? (
            <div>Loading...</div>
          ) : (
            
            <div >
               
               <div className="titulo-video">
               <h2>NIVEL INICIAL</h2>  <img src ="/imagenes/derecha.png" className="logo-flecha-video" alt="reproducir" /> 
        </div>
                            {this.props.videos.map((video) => (
                               
                                <div key={video._id}>
                                <div className="videos-lista">
                               
                                <Link className="videos-lista" to={"#" + video._id} onClick={() => this.openModal(video)}>
                                                <div className="video">
                                                <p> {video.nivel} -{video.nombre}</p>
                                
                                            
                                                <img src='/imagenes/reproducir.png'className="reproducir" alt="reproducir" />
                                                </div>
                                                
                                            </Link>
                                        </div>
                                       
                                    
                                </div>))}

              </div>
            )}



        </Fade>
        

</div>
<div className="container-videos">
 
        
 <Fade bottom cascade={true}>
   
   {!this.props.videos ? (
     <div>Loading...</div>
   ) : (
     
     <div >
        
        <div className="titulo-video">
        <h2>NIVEL INTERMEDIO</h2>   <img src ="/imagenes/derecha.png" className="logo-flecha-video" alt="reproducir" /> 
        </div>

                     {this.props.videos.map((video) => (
                        
                         <div key={video._id}>
                         <div className="videos-lista">
                        
                         <Link className="videos-lista" to={"#" + video._id} onClick={() => this.openModal(video)}>
                         <div className="video">
                                                <p> {video.nivel} -{video.nombre}</p>
                                
                                            
                                                <img src='/imagenes/reproducir.png'className="reproducir" alt="reproducir" />
                                                </div>
                                                
                                     </Link>
                                 </div>
                                
                             
                         </div>))}

       </div>
     )}



 </Fade>
 

</div>
<div className="container-videos">
 
        
 <Fade bottom cascade={true}>
   
   {!this.props.videos ? (
     <div>Loading...</div>
   ) : (
     
     <div >
        
        <div className="titulo-video">
        <h2>NIVEL AVANZADO</h2>   <img src ="/imagenes/derecha.png" className="logo-flecha-video" alt="reproducir" /> 
        </div>

                     {this.props.videos.map((video) => (
                        
                         <div key={video._id}>
                         <div className="videos-lista">
                        
                         <Link className="videos-lista" to={"#" + video._id} onClick={() => this.openModal(video)}>
                         <div className="video">
                                                <p> {video.nivel} -{video.nombre}</p>
                                
                                            
                                                <img src='/imagenes/reproducir.png'className="reproducir" alt="reproducir" />
                                                </div>
                                                
                                     </Link>
                                 </div>
                                
                             
                         </div>))}

       </div>
     )}



 </Fade>
 

</div>
<div className="container-videos">
 
        
 <Fade bottom cascade={true}>
   
   {!this.props.videos ? (
     <div>Loading...</div>
   ) : (
     
     <div className="lista-v">
       <div className="titulo-video">
        <h2>NIVEL PROFESIONAL </h2> <img src ="/imagenes/derecha.png" className="logo-flecha-video" alt="reproducir" /> 
        </div>
                     {this.props.videos.map((video) => (
                        
                         <div key={video._id}>
                         <div className="videos-lista">
                        
                         <Link className="videos-lista" to={"#" + video._id} onClick={() => this.openModal(video)}>
                         <div className="video">
                                                <p> {video.nivel} -{video.nombre}</p>
                                
                                            
                                                <img src='/imagenes/reproducir.png'className="reproducir" alt="reproducir" />
                                                </div>
                                                
                                     </Link>
                                     
                                 </div>
                                 
                                
                             
                         </div>))}

       </div>
     )}



 </Fade>
 
         {video && (
   <Modal className="reproductor" isOpen={true} onRequestClose={this.closeModal}>
     <Zoom>
       <button className="close-modal" onClick={this.closeModal}>
         X
       </button>
       <hr/>

       <ReactPlayer className="player" url={video.video} controls width='100%'
          height='100%'/>
                                       
                                     
      
     </Zoom>
   </Modal>
 )}
</div>
</Slider>

      </div>
   

    )
  }
}
export default connect(
  (state) => ({ videos: state.videos.filteredItems }),
  {
    fetchVideos
  }
)(Videos);