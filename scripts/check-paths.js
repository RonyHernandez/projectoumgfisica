const chalk = require('chalk');
const { log } = console;

/**
 * This script validates consistency across configuration files
 * that are defining custom paths to resolve modules.
 *
 * If you want to define new paths, make sure to add them
 * in the files listed below, or if you want to add new
 * files with paths (for example: jest.config.js), make sure to
 * add them here and transform the fields that contain paths/aliases.
 * Remember also to include the file as glob-pattern inside
 * "lint-staged" -> "linters" section of package.json.
 *
 * https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * https://www.typescriptlang.org/docs/handbook/compiler-options.html
 */

const WEBPACK = 'webpack.base.js';
const TSCONFIG = 'tsconfig.json';
const JESTCFG = 'jest.config.js';
const ESLINT = '.eslintrc.js';

const webpackcfg = require(`../${WEBPACK}`);
const eslintcfg = require(`../${ESLINT}`);
const tsconfig = require(`../${TSCONFIG}`);
const jestcfg = require(`../${JESTCFG}`);

// Allows transform keys and make it consistent to be compared with other configurations
const transform = (keys, cb) => (typeof cb === 'function' ? cb(keys) : keys);

// Exits with error code 1
function fail() {
  log(chalk.bgRed('\nCONFIGURATIONS ARE NOT CONSISTENT'));
  log(chalk.blue.bold('Validate the following files and fields:'));
  const message = `
    - ${WEBPACK}  \t-> {"alias"}
    - ${ESLINT}   \t-> {"alias"}
    - ${TSCONFIG} \t-> {"paths"}
    - ${JESTCFG}  \t-> {"moduleNameMapper"}`;
  log(message.trim());
  process.exit(1);
}

// Validates two configurations having the same keys
function validate(keys1, keys2) {
  if (keys1.length !== keys2.length) fail();
  // all keys in keys1 must be in keys2
  if (keys1.every((k) => keys2.includes(k))) return keys2;
  // exits with error code 1
  fail();
}

function filterKeys() {
  const skipKeys = ['@build', '@config', '@public'];
  return (k) => !skipKeys.includes(k);
}

function init() {
  const ignoreKeys = filterKeys();
  const webpackKeys = transform(Object.keys(webpackcfg.resolve.alias)).filter(ignoreKeys);

  const eslintKeys = transform(eslintcfg.settings['import/resolver'].webpack.config, (cfg) =>
    Object.keys(cfg.resolve.alias).filter(ignoreKeys),
  );

  const tsconfigKeys = transform(Object.keys(tsconfig.compilerOptions.paths), (keys) => {
    // transform keys and make them consistent to be compared with other configurations
    return keys.map((k) => k.replace('/*', '')).filter(ignoreKeys);
  });

  const jestKeys = transform(Object.keys(jestcfg.moduleNameMapper).slice(1), (keys) => {
    return keys.map((k) => k.replace('/(.+)$', '')).filter(ignoreKeys);
  });

  // validates all configuration files
  [webpackKeys, eslintKeys, tsconfigKeys, jestKeys].reduce(validate);
}

init();
