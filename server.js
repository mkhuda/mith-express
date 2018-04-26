require('mithril/test-utils/browserMock')(global);
global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

const app = require('./server/index');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Mith-Express App listening on port ${port}!`));
