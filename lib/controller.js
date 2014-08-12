'use strict';
var views = require('./views')
  // , models = require('./models')
  , React = require('react');

module.exports.showIndex = function showIndex (req, res, routeparams) {
  var props = {partials:
    [{DOMel: React.DOM.a,
      href: 'asdf',
      subject: 'fifa'},
      { DOMel: React.DOM.ul,
        subject:'ahoi',
        children: React.DOM.li(null, 'erster in der liste')},
      { DOMel: React.DOM.ol,
        subject: 'jochen'}]
  };

  views.renderView(req, res, props);
};

module.exports.showTest= function showTest (req, res, routeparams) {
  var props = {partials:
    [{DOMel: React.DOM.a,
      href: 'blabal',
      subject: 'stream'},
      { DOMel: React.DOM.ul,
        subject:'miami',
        children: React.DOM.li(null, 'hotline hotline')},
      { DOMel: React.DOM.ol,
        subject: 'wizard'}]
  };

  views.renderView(req, res, props);
};
