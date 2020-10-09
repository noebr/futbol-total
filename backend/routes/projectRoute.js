import express from 'express';
import Project from '../models/projectModels';
import { isAuth, isAdmin } from '../util';
import cors from 'cors';


const router = express.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
router.use(cors(corsOptions));

router.get("/api/projects",async (req,res) =>{

  const Projects = await Project.find({});
  res.send(Projects);
});
router.post("/api/projects", async (req, res) => {
  const newProject = new Project(req.body);
  const savedProject = await newProject.save();
  res.send(savedProject);
});

router.delete("/api/projects/:id", async (req, res) => {
  const deletedProject = await Project.findByIdAndDelete(req.params.id);
  res.send(deletedProject);
});
export default router;
