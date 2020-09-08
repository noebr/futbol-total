import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Iniciarsesion from './pages/Iniciarsesion';
import Registrate from './pages/Registrate';
import Repetirc from './pages/Repetirc'
import Contraseña from './pages/Contraseña';
import Alertacont from './pages/Alertacont';
import MenuRegistrate from './pages/MenuRegistrate';
import HomeMejora from './screens/HomeMejora';
import HomeApoyanos from './screens/HomeApoyanos';
import Contacto from './pages/Contacto';
import HomePricipal from './screens/HomePrincipal';
import Fiscalizacionhome from './Fiscalizacion/Fiscalizacionhome';
import HomeCarrito from './screens/HomeCarrito';
import store from './store';
import { Provider } from 'react-redux';


  





class App extends React.Component{

render(){
  return (
    <Provider store={store}>
    <BrowserRouter>

        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/shopping"  component={HomeScreen}></Route>
        <Route path='/' exact={true} component={HomePricipal}></Route>

        <Route path="/login" component={Iniciarsesion}></Route>
        <Route path="/registrate" component={Registrate}></Route>
        <Route path="/Recuperar-contraseña" component={Repetirc}></Route>
        <Route path="/codigo" component={Contraseña}></Route>
        <Route path="/alerta-codigo" component={Alertacont}></Route>
        <Route path="/homelogin" component={MenuRegistrate}></Route>
        <Route path="/mejora-tu-juego" component= {HomeMejora}></Route>
        <Route path="/apoyanos" component= {HomeApoyanos}></Route>
        <Route path="/contacto" component= {Contacto}></Route>
        <Route path="/fiscalizacion" component={Fiscalizacionhome}></Route>
        <Route path="/carrito" component={HomeCarrito}></Route>
    </BrowserRouter>
    </Provider>
  );
}
}

export default App;