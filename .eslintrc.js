module.exports = {
  'env': {
    'browser': true
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
