var views = require('./views')
  , React = require('react');

module.exports.showIndex = function showIndex (req, res) {
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

  // models.getPageObj(this.req, this.res, 'index', mappings.index,
  //   views.renderView);
};
