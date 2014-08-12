var react = require('react');

module.exports = react.createClass({

  render: function() {
    return react.DOM.head(null,
      react.DOM.meta({charSet: "UTF-8"}),
      react.DOM.title(null, "React Page | Client-Server JavaScript Rendering"),
      react.DOM.meta({ name: "viewport"
                     , content: "width=device-width, initial-scale=1.0, user-scalable=no"
                     })
      //                }),
      // react.DOM.link({ rel: "stylesheet"
      //                , type: "text/css"
      //                , href: "/style.css"
      //                })
    );
  },
});
