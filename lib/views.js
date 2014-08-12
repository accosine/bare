'use strict';
var react = require('react')
  , document = require('./components/document');

module.exports.renderView = function renderView(req, res, props) {
  var html = react.renderComponentToString(document(props));

  res.end(html);
}
