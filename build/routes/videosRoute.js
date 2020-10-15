"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _videosModels = _interopRequireDefault(require("../models/videosModels"));

var _util = require("../util");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 

};
router.use((0, _cors.default)(corsOptions));
router.get("/api/videos", async (req, res) => {
  const videos = await _videosModels.default.find({});
  res.send(videos);
});
router.post("/api/videos", async (req, res) => {
  const newVideo = new _videosModels.default(req.body);
  const savedVideo = await newVideo.save();
  res.send(savedVideo);
});
router.delete("/api/videos/:id", async (req, res) => {
  const deletedVideo = await _videosModels.default.findByIdAndDelete(req.params.id);
  res.send(deletedVideo);
});
var _default = router;
exports.default = _default;