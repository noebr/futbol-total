"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const videoSchema = new _mongoose.default.Schema({
  nombre: String,
  video: String,
  nivel: [String]
});

const videoModel = _mongoose.default.model('Video', videoSchema);

var _default = videoModel;
exports.default = _default;