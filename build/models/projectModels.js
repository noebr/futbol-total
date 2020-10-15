"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const projectSchema = new _mongoose.default.Schema({
  title: String,
  img: String,
  descriptionC: String,
  description: String,
  plan: [String],
  c_donantes: Number,
  meta: Number,
  monto_recaudado: Number
});

const projectModel = _mongoose.default.model('Project', projectSchema);

var _default = projectModel;
exports.default = _default;