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

  const products = await Product.find({});
  res.send(products);
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
