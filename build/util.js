"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isAuth = exports.getToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getToken = user => {
  return _jsonwebtoken.default.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  }, process.env.JWT_SECRET || 'somethingsecret', {
    expiresIn: '48h'
  });
};

exports.getToken = getToken;

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    const token = authorization.slice(7, authorization.length);

    _jsonwebtoken.default.verify(token, process.env.JWT_SECRET || 'somethingsecret', (err, decode) => {
      if (err) {
        res.status(401).send({
          message: 'Invalid Token'
        });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({
      message: 'No Token'
    });
  }
};

exports.isAuth = isAuth;

const isAdmin = (req, res, next) => {
  console.log(req.user);

  if (req.user && req.user.isAdmin) {
    return next();
  }

  return res.status(401).send({
    message: 'Admin Token is not valid.'
  });
};

exports.isAdmin = isAdmin;