// require('jsdom-global')()
global.window = Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')());
const WelcomeView = require('../test-utils/views/Welcome');
const mq = require('mithril-query');

const output = mq(WelcomeView);
const root = output.rootNode;
const jumbotron = root.renderedChildren[0];

test('Root tag of WelcomeView to be div', () => {
  expect(root.tag).toBe('div');
});

test('Jumbroton should be viewed', () => {
  expect(jumbotron.attrs.className).toBe('jumbotron');
});

