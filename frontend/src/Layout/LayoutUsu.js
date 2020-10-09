import React from 'react';
import NavigationU from '../Layout/NavegacionU';
import Footer from '../Layout/Footer'


const LayoutU = ({children}) => (
    <div className="App">
        <NavigationU/>
        {children}
        <Footer />
     
    </div>

);
export default LayoutU;