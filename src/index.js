const m = require('mithril');
const route = require('./routes');
require('../spectre/style.scss');

m.route.prefix('');
m.route(document.body, '/', route);
