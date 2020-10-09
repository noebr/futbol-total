import mongoose from 'mongoose';


const projectSchema = new mongoose.Schema({

  title: String,
  img:String,
  descriptionC:String,
  description:String,
  plan: [String],
  c_donantes:Number,
  meta:Number,
  monto_recaudado:Number
  
  })


const projectModel = mongoose.model('Project', projectSchema);

export default projectModel;