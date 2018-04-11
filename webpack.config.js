const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd'
  },
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: ['/'],
      locals: {}
    })
  ]
};
