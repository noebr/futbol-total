"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const articuloSchema = new _mongoose.default.Schema({
  title: String,
  subtitle: String,
  img: String,
  img2: String,
  textoC: String,
  textoC2: String,
  description: String
});

const articuloModel = _mongoose.default.model('Articulo', articuloSchema);

var _default = articuloModel;
exports.default = _default;