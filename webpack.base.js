const { mapPaths } = require('./config/paths');

/**
 * To compile using Babel
 * @see https://dev-yakuza.github.io/en/react/typescript/
 * @see https://www.jackfranklin.co.uk/blog/react-typescript/
 * @see https://medium.com/@ameersami/react-webpack-typescript-project-setup-e78e4503311a
 */

module.exports = {
  resolve: {
    symlinks: false,
    extensions: ['.ts', '.tsx', '.js'],
    alias: mapPaths(),
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
};
