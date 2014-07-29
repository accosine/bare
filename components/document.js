var react = require('react');
var head = require('./head');
var body = require('./body');

module.exports = react.createClass({

  render: function() {
    return react.DOM.html(null,
      head(null),
      body(this.props)
    );
  },
});
