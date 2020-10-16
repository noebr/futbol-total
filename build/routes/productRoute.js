"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _productModels = _interopRequireDefault(require("../models/productModels"));

var _util = require("../util");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 

};
router.use((0, _cors.default)(corsOptions));
router.get("/api/products", async (req, res) => {
  try {
    const products = await _productModels.default.find({}); // const products = [1,2,3,4];

    res.send(products);
  } catch (error) {
    res.send(error);
  }
});
router.post("/api/products", async (req, res) => {
  const newProduct = new _productModels.default(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});
router.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await _productModels.default.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});
var _default = router;
exports.default = _default;