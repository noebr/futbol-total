import React from 'react';
import '../Shopping.css';
import Layout from '../Layout/Layout';
import Filter from '../components/Filter';
import Products from '../screens/Products';





class HomeScreen extends React.Component {
  render(){


return(
  <Layout>
  <div className="container-shopping">

  <Filter></Filter> 
 
   

  <Products></Products>

 <br/><br/>
</div>
</Layout>
)


  }
}






export default HomeScreen;