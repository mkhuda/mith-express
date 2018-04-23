// require('jsdom-global')()
global.window = Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')());
const WelcomeView = require('../src/views/Welcome');
const mq = require('mithril-query');

const output = mq(WelcomeView);
const root = output.rootNode;
const column = root[0][1].renderedChildren[0];

test('HTML containing head', () => {
  expect(column.tag).toBe('head');
});

test('Head containing title Welcome', () => {
  expect(column.children[3].text).toBe('Welcome | Mithril Express');
});

