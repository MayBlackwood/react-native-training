module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'no-case-declarations': 0,
    'react/jsx-fragments': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
  },
};
