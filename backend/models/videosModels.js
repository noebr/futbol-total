import mongoose from 'mongoose';


const videoSchema = new mongoose.Schema({

  nombre: String,
  video:String,
  nivel: [String],
  
  })


const videoModel = mongoose.model('Video', videoSchema);

export default videoModel;