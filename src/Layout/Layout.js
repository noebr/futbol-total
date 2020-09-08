import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer from '../Layout/Footer'


const Layout = ({children}) => (
    <div className="App">
        <Navigation />
        {children}
        <Footer />
     
    </div>

);
export default Layout;
