'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

//MIDDLEWARE
//If use this, it wil pass through here first.

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  //add middleware

  return api;
};
//# sourceMappingURL=index.js.map