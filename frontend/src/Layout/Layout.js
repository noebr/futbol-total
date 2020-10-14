import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer'


const Layout = ({children}) => (
    <div className="App">
        <Navigation />
        {children}
        <Footer />

            <img src="/imagenes/sello.png" className="sello" alt="apóyanos" />

     
    </div>

);
export default Layout;
