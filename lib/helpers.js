var crypto = require("crypto");
var jwt = require("jsonwebtoken");
const JWTKEY = "AsHfaqHussain";
// var nodemailer = require('nodemailer');
exports.decodeMD5 = function(pass) {
  return crypto
    .createHash("md5")
    .update(pass)
    .digest("hex");
};
exports.getToken = function(p, fn) {
  crypto.randomBytes(48, function(err, buffer) {
    return buffer.toString("hex");
  });
};

exports.virifyCode = function(pass) {
  return crypto
    .createHash("md5")
    .update(pass)
    .digest("hex");
};

exports.JWTSign = function(obj, fn) {
  //  return jwt.sign(obj, JWTKEY, { expiresIn: '1h' });
  return jwt.sign(obj, JWTKEY);
};

exports.JWTverify = function(token, cb) {
  jwt.verify(token, JWTKEY, function(err, decoded) {
    cb(err, decoded);
  });
};

exports.JWTrefresh = function(token, cb) {
  var decoded = jwt.decode(token, JWTKEY);
  if (decoded) {
    if (decoded.iat) {
      delete decoded.iat;
    }
  }
  var token = jwt.sign(decoded, JWTKEY);
  return token;
};

exports.JWTdecode = function(token, cb) {
  return jwt.decode(token, JWTKEY);
};
