"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _articuloModels = _interopRequireDefault(require("../models/articuloModels"));

var _util = require("../util");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 

};
router.use((0, _cors.default)(corsOptions));
router.get("/api/articulos", async (req, res) => {
  const articulos = await _articuloModels.default.find({});
  res.send(articulos);
});
router.post("/api/articulos", async (req, res) => {
  const newArticulo = new _articuloModels.default(req.body);
  const savedArticulo = await newArticulo.save();
  res.send(savedArticulo);
});
router.delete("/api/articulos/:id", async (req, res) => {
  const deletedArticulo = await _articuloModels.default.findByIdAndDelete(req.params.id);
  res.send(deletedArticulo);
});
var _default = router;
exports.default = _default;