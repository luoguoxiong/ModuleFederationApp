const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index'),
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      remotes: {
        common: `common@${getRemoteEntryUrl()}`,
        libary: 'libary@http://localhost:8000/libary.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
};

function getRemoteEntryUrl(port) {
  return 'http://localhost:3002/remoteEntry.js';
}

