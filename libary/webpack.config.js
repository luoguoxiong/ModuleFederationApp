const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8000,
  },
  output: {
    publicPath: "auto",
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: "libary",
      filename: "libary.js",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
      },
    }),
  ],
};
