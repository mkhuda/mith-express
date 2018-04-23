require('mithril/test-utils/browserMock')(global);
const app = require('./server/index');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Mith-Express App listening on port ${port}!`));
