var react = require('react');

module.exports = react.createClass({

  render: function() {
    return react.DOM.body({
      children: this.props.partials.map(function(partial) {
        return partial.DOMel(null, partial.subject, partial.children);
      })
    });
  },
});
