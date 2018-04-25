// require('jsdom-global')()
global.window = Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')());
const WelcomeView = require('../src/views/Welcome');
const mq = require('mithril-query');
const o = require('mithril/ospec/ospec');

const output = mq(WelcomeView);
const root = output.rootNode;
const column = root[0][1].renderedChildren[0];

o('Welcome Test HTML containing head', () => {
  o(column.tag).equals('head');
});

o('Head containing title Welcome', () => {
  o(column.children[3].text).equals('Welcome | Mithril Express');
});

