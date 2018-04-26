const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const clientRoutes = require('../src/routes');
const apiRoutes = require('./api');
const m = require('mithril');
const toHtml = require('mithril-node-render');

const app = express();
const jsonParser = bodyParser.json();
const router = express.Router();
const api = express.Router();

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../build')));

Object.keys(clientRoutes).forEach((route) => {
  router.get(route, (req, res, next) => {
    const module = clientRoutes[route];
    const onmatch = module.onmatch || (() => module);
    const render = module.render || (a => a);
    const attrs = Object.assign({}, req.params, req.query);
    Promise.resolve()
      .then(() => m(onmatch(attrs, req.url) || 'div.from_node', attrs))
      .then(render)
      .then(toHtml)
      .then((html) => {
        res.type('html').send(html);
      })
      .catch(next);
  });
});

Object.keys(apiRoutes).forEach((route) => {
  const routeCallback = apiRoutes[route];
  api.get(route, jsonParser, routeCallback);
});

app.use('/', router);
app.use('/api', api);

module.exports = app;
