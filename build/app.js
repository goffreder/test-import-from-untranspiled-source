'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsTest = require('./components/Test');

var _componentsTest2 = _interopRequireDefault(_componentsTest);

if (process.env.NODE_ENV !== 'production') {
    ReactDOM.render(React.createElement(_componentsTest2['default'], null), document.getElementById('app'));
}

exports['default'] = _componentsTest2['default'];
module.exports = exports['default'];