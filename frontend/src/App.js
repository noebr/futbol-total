import React from "react";
import { BrowserRouter, Route,BrowserHistory,Router, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Provider } from 'react-redux';


import store from './store';


import SinginScreen from "./pages/SinginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import Videos from "./MisVideos/Videos";
import HomePricipal from './screens/HomePrincipal';
import HomeScreen from './screens/HomeScreen';
import Donaciones from './screens/Donaciones'
import Padrinazgo from "./screens/Padrinazgo";
import Voluntariado from "./screens/Voluntariado";
import HomeApoyanos from './screens/HomeApoyanos';
import Voluntariadoform from "./pages/Voluntariadoform";
import Fiscalizacionhome from './Fiscalizacion/Fiscalizacionhome';
import HomeCarrito from './screens/HomeCarrito';
import Contacto from './pages/Contacto';
import Registrate from './pages/Registrate';
import Repetirc from './pages/Repetirc'
import Contraseña from './pages/Contraseña';
import Alertacont from './pages/Alertacont';
import MenuRegistrate from './pages/MenuRegistrate';
import HomeMiespacio from "./MisVideos/HomeMiespacio";
import HomeCompra from "./screens/HomeCompra";
import Payment from "./screens/Payment";
import HomeMejora from "./screens/HomeMejora";
import IngresosEgresos from "./Fiscalizacion/IngresosEgresos";
import EntregaBeneficiarios from "./Fiscalizacion/EntregaBeneficiarios";
import ExistenciaD from "./Fiscalizacion/ExistenciaD";
import DonacionesyP from "./Fiscalizacion/DonacionesyP";

import OrderScreen from './screens/OrderScreen';
import HomeOrder from "./screens/HomeOrder";
import DetallesdeA from "./Fiscalizacion/DetallesdeA";













  





class App extends React.Component{


render(){


  return (
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
 
   
       { /**shopping */}
        <Route path="/shopping"  component={HomeScreen}></Route>
        {/**principal */}
        <Route path='/' exact={true} component={HomePricipal}></Route>


<Route path="/register" component={RegisterScreen} ></Route>
{ /** Mis videos */}
        <Route path="/videos" component={Videos}></Route>
        <Route path="/apoyanos" component= {HomeApoyanos}></Route>
        {/**home de donaciones */}
        <Route path="/donaciones" component= {Donaciones}></Route>
        {/**home de padrinazgo */}
        <Route path="/padrinazgo" component= {Padrinazgo}></Route>
        {/**home de voluntariado */}
        <Route path="/voluntariado" component= {Voluntariado}></Route>
        <Route path="/form-voluntariado" component={Voluntariadoform}></Route>
        {/**contacto */}
        <Route path="/contacto" component= {Contacto}></Route>
        {/**home carrito */}
        <Route path="/carrito" component={HomeCarrito}></Route>
       { /** home fiscalizacion */}
        <Route path="/fiscalizacion" component={Fiscalizacionhome}></Route>
        <Route path="/mejora-tu-juego" component={HomeMejora}></Route>
        		
		{/**login */}
    <Route path="/signin" component={SinginScreen}></Route>
  
        {/**Registro de usuario externo */}
        <Route path="/registrate" component={Registrate}></Route>
        {/**ingresa contraseña nueva */}
        <Route path="/Recuperar-contraseña" component={Repetirc}></Route>
       { /**enviar codigo */}
        <Route path="/codigo" component={Contraseña}></Route>
        {/**ingresar codigo de Recuperacion de contraseña */}
        <Route path="/alerta-codigo" component={Alertacont}></Route>
       { /**sos nuevo o ya tenes cuenta */}
        <Route path="/homelogin" component={MenuRegistrate}></Route>
        { /**Mi espacio */}
        <Route path="/mi-espacio" component={HomeMiespacio}></Route>
        <Route path="/facturacion" component={HomeCompra} ></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/ingresos-egresos" component={IngresosEgresos}></Route>
        <Route path="/entrega-beneficiarios" component={EntregaBeneficiarios}></Route>
        <Route path="/existencia-donaciones" component={ExistenciaD}></Route>
        <Route path="/Donaciones-padrinazgo" component={DonacionesyP}></Route>
        <Route path="/detalles-aporte" component={DetallesdeA}></Route>
     
        <Route Path="/order/:id" component={OrderScreen}></Route>
        <Route Path="/placeorder" component={HomeOrder}></Route>
       
     
       
        

     
        </Switch>  
    </BrowserRouter>
    </Provider>
  );
}
}


export default App;