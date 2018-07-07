module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: 0,
    'object-curly-spacing': [1, "never"],
    "comma-dangle": 0,
    "max-len": [1, 150],
    "no-underscore-dangle": 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
