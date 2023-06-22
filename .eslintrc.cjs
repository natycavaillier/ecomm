module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'prefer-destructuring': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'new-cap': 'off',
    'no-underscore-dangle': 'off',
  },
};
