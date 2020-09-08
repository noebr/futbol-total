import React from 'react';
import Navigation from '../Layout/Navigation2';
import Footer from '../Layout/Footer'


const Layout2 = ({children}) =>(
    <div className="App">
        <Navigation />
        {children}
        <Footer />
     
    </div>

);
export default Layout2;
