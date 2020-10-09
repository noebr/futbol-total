import React from 'react';
import Navigation from '../Layout/Navigation';
import Footer2 from '../Layout/Footer2'


const Layout2 = ({children}) =>(
    <div className="App">
        <Navigation />
        {children}
        <Footer2 />
     
    </div>

);
export default Layout2;
