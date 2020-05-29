const { resolve } = require('path');

/**
 * process.cwd(): returns the current working directory,
 * __dirname: returns the directory name of the directory containing the JavaScript source code file
 */
const CWD = process.cwd();

const config = {
  CWD,
  resolve,
  paths: {
    build: resolve(CWD, 'build'),
    config: resolve(CWD, 'config'),
    public: resolve(CWD, 'public'),
    src: resolve(CWD, 'src/client'),
    components: resolve(CWD, 'src/client/components'),
    definitions: resolve(CWD, 'src/client/definitions'),
    utils: resolve(CWD, 'src/client/utils'),
    static: resolve(CWD, 'src/static'),
  },
  server: {
    port: 3001,
  },
  mapPaths(prefix = '@') {
    const alias = {};
    const paths = config.paths;
    for (const key in paths) {
      alias[prefix + key] = paths[key];
    }
    return alias;
  },
};

module.exports = config;
