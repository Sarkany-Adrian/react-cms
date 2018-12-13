module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: ['flowtype-errors', 'flowtype', 'react-hooks', 'prettier'],
  globals: {
    __DEV__: true
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    // we need to disable it - due to issues with JEST
    // see https://github.com/benmosher/eslint-plugin-import/issues/472
    'import/first': 0,
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],
    'no-underscore-dangle': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['nesting', 'id']
        },
        allowChildren: true
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'prettier/prettier': 'error',
    'flowtype-errors/show-errors': 2,
    'flowtype-errors/show-warnings': 2,
    // 'flowtype-errors/enforce-min-coverage': [2, 100],
    'flowtype/require-variable-type': [0],
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': 0,
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 0,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': 0,
    'flowtype/require-valid-file-annotation': 0,
    'flowtype/semi': 0,
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': 0,
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
};
