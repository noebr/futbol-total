import mongoose from 'mongoose';


const articuloSchema = new mongoose.Schema({

  title: String,
  subtitle:String,
  img:String,
  img2:String,
  textoC:String,
  textoC2:String,
  description:String,
  
  })


const articuloModel = mongoose.model('Articulo', articuloSchema);

export default articuloModel;