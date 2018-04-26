module.exports = {
  'env': {
    'browser': true
  },
  'rules': {
    'no-param-reassign': 0,
    'no-unused-vars': [1, {'vars': 'local', 'args': 'none'}]
  },
  'extends': 'airbnb-base',
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
        'jsx': true
    },
    'sourceType': 'module'
  },
  'globals': {
    'm': false
  }
};
