const m = require('mithril');
const route = require('./routes');
require('./style/styles.css');

m.route.prefix('');
m.route(document.body, '/', route);
