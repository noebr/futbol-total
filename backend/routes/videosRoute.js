import express from 'express';
import Video from '../models/videosModels';
import { isAuth, isAdmin } from '../util';
import cors from 'cors';


const router = express.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
router.use(cors(corsOptions));

router.get("/api/videos",async (req,res) =>{

  const videos = await Video.find({});
  res.send(videos);
});
router.post("/api/videos", async (req, res) => {
  const newVideo = new Video(req.body);
  const savedVideo = await newVideo.save();
  res.send(savedVideo);
});

router.delete("/api/videos/:id", async (req, res) => {
  const deletedVideo = await Video.findByIdAndDelete(req.params.id);
  res.send(deletedVideo);
});
export default router;
