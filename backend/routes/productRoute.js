import express from 'express';
import Product from '../models/productModels';
import { isAuth, isAdmin } from '../util';
import cors from 'cors';


const router = express.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
router.use(cors(corsOptions));

router.get("/api/products",async (req,res) =>{
try {
    const products = await Product.find({});
   // const products = [1,2,3,4];
    res.send(products);
} catch (error) {
  res.send(error);
  
}


});
router.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

router.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});
export default router;
