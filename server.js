require('mithril/test-utils/browserMock')(global);
const express = require('express');
const path = require('path');
const clientRoutes = require('./src/routes');
const m = require('mithril');
const toHtml = require('mithril-node-render');

const app = express();
const port = process.env.PORT || 5000;

const router = express.Router();

app.use('/', express.static(path.join(__dirname, 'build')));

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

app.use('/', router);
app.listen(port, () => console.log(`Mith-Express App listening on port ${port}!`));
