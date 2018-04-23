// require('jsdom-global')()
global.window = Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')());
const UserListView = require('../src/views/UserList');
const mq = require('mithril-query');

const output = mq(UserListView);
const root = output.rootNode;
const column = root[0][1].renderedChildren[0];

test('HTML containing head', () => {
  expect(column.tag).toBe('head');
});

test('Head containing title User List', () => {
  expect(column.children[3].text).toBe('User List | Mithril Express');
});

