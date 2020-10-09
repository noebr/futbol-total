import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({

  name: String,
  image:String,
  price: Number,
  brand:String,
  description:String,
  category: [String],
  
  })


const productModel = mongoose.model('Product', productSchema);

export default productModel;