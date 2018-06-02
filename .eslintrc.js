module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: ['react-app', 'airbnb-base'],
  plugins: ['react'],
  rules: {
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-brace-presence': ['warn', { props: 'always' }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'function-paren-newline': ['off'],
  },
};
