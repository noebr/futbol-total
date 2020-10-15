"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _projectModels = _interopRequireDefault(require("../models/projectModels"));

var _util = require("../util");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 

};
router.use((0, _cors.default)(corsOptions));
router.get("/api/projects", async (req, res) => {
  const Projects = await _projectModels.default.find({});
  res.send(Projects);
});
router.post("/api/projects", async (req, res) => {
  const newProject = new _projectModels.default(req.body);
  const savedProject = await newProject.save();
  res.send(savedProject);
});
router.delete("/api/projects/:id", async (req, res) => {
  const deletedProject = await _projectModels.default.findByIdAndDelete(req.params.id);
  res.send(deletedProject);
});
var _default = router;
exports.default = _default;