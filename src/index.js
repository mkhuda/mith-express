const m = require('mithril');
const route = require('./routes');

m.route.prefix('');
m.route(document.body, '/', route);
