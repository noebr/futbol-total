"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productSchema = new _mongoose.default.Schema({
  name: String,
  image: String,
  price: Number,
  brand: String,
  description: String,
  category: [String]
});

const productModel = _mongoose.default.model('Product', productSchema);

var _default = productModel;
exports.default = _default;