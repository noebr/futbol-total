import express from 'express';
import Articulo from '../models/articuloModels';
import { isAuth, isAdmin } from '../util';
import cors from 'cors';


const router = express.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
router.use(cors(corsOptions));

router.get("/api/articulos",async (req,res) =>{

  const articulos = await Articulo.find({});
  res.send(articulos);
});
router.post("/api/articulos", async (req, res) => {
  const newArticulo = new Articulo(req.body);
  const savedArticulo = await newArticulo.save();
  res.send(savedArticulo);
});

router.delete("/api/articulos/:id", async (req, res) => {
  const deletedArticulo = await Articulo.findByIdAndDelete(req.params.id);
  res.send(deletedArticulo);
});
export default router;