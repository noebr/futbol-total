"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _productRoute = _interopRequireDefault(require("./routes/productRoute"));

var _videosRoute = _interopRequireDefault(require("./routes/videosRoute"));

var _projectRoute = _interopRequireDefault(require("./routes/projectRoute"));

var _articulosRoute = _interopRequireDefault(require("./routes/articulosRoute"));

var _orderRoute = _interopRequireDefault(require("./routes/orderRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

_mongoose.default.connect(process.env.MONGODB_URL || 'mongodb://localhost/futbol-total', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

app.use(_bodyParser.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/api/users', _userRoute.default);
app.use('/', _productRoute.default);
app.use('/', _videosRoute.default);
app.use('/', _projectRoute.default);
app.use('/', _articulosRoute.default);
app.use('/api/orders', _orderRoute.default);
app.use(_express.default.static(_path.default.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(_path.default.join(`${__dirname}/../frontend/public/index.html`));
});
const port = process.env.PORT || '5000';
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});