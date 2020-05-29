const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const { resolve, paths, server } = require('./config/paths');
const baseConfig = require('./webpack.base.js');

// package.json scripts uses -p and -d flags
// @see: https://webpack.js.org/api/cli/#shortcuts

// package.json scripts uses --mode flag
// @see: https://webpack.js.org/configuration/mode/

module.exports = (env = 'development') => {
  const isProd = env === 'production';
  // Necessary for hot reloading with IE
  const entries = isProd ? [] : ['eventsource-polyfill'];

  const config = {
    target: 'web',
    mode: env, // from cli
    entry: entries.concat(resolve(paths.src, 'app.tsx')),
    output: {
      filename: 'app.bundle.[hash:8].js',
      path: paths.public,
      publicPath: '/',
      pathinfo: false,
    },
    // Emit a source map for easier debugging
    // See https://webpack.js.org/configuration/devtool/#devtool
    devtool: isProd ? false : 'eval-source-map',
    devServer: {
      port: server.port,
      historyApiFallback: true,
      compress: false,
      inline: true,
    },
    plugins: (() => {
      const plugins = [
        new HtmlWebpackPlugin({
          template: './src/static/index.html',
        }),
      ];
      if (!isProd) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
      }
      if (isProd) {
        plugins.push(
          new ReplaceInFileWebpackPlugin([
            {
              dir: paths.public,
              files: ['index.html'],
              rules: [
                {
                  search: /development\.js/g,
                  replace: 'production.min.js',
                },
              ],
            },
          ]),
        );
      }
      return plugins;
    })(),
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
    },
  };

  return merge(baseConfig, config);
};
