// require('jsdom-global')()
global.window = Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')());
const UserListView = require('../src/views/UserList');
const mq = require('mithril-query');
const o = require('mithril/ospec/ospec');

const output = mq(UserListView);
const root = output.rootNode;
const column = root[0][1].renderedChildren[0];

o('User List HTML containing head', () => {
  o(column.tag).equals('head');
});

o('Head containing title User List', () => {
  o(column.children[3].text).equals('User List | Mithril Express');
});

