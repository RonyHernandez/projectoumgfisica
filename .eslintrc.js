const { mapPaths } = require('./config/paths');

/**
 * @see documentation about rules
 * https://prettier.io/docs/en/eslint.html
 * https://github.com/prettier/eslint-plugin-prettier#options
 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
 *
 * @see memberSyntaxSortOrder
 * https://github.com/eslint/eslint/issues/12008
 */

module.exports = {
  plugins: ['import', 'react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    //'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    'react': {
      // automatically picks the version you have installed
      version: '16', // 'detect',
    },
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: mapPaths(),
            extensions: ['.ts', '.tsx', '.js'],
          },
        },
      },
      jest: {
        jestConfigFile: './jest.config.js',
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // this setting is required if you want to use rules which require type information
    // project: ['./tsconfig.json'],
  },
  rules: {
    'prettier/prettier': 'error',
    'spaced-comment': ['warn', 'always'],
    'lines-between-class-members': ['error', 'always'],
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/no-unresolved': [2, { ignore: ['aw-tools', 'proxy-storage'] }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
        // 'newlines-between': 'always',
      },
    ],
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true, fixToUnknown: true }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/type-annotation-spacing': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
